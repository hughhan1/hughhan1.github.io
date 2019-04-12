import * as React from 'react';

import BlogPost from './index';

export const WorkingAtMongodb: React.SFC<{}> = (props: {}) => {
  return (
    <BlogPost title="Working at MongoDB">
      <p>
        Last Friday marked my last day as an intern working at MongoDB. Inc. During my time here,
        I’ve met countless amazing people—full timers and interns alike—and had one of my most
        memorable experiences at a workplace, ever.
      </p>
      <h2>The Company</h2>
      <img src={require('../../static/img/working-at-mongodb/pongodb.jpg')} alt="pongoDB" />
      <p>
        MongoDB, Inc. started out as{' '}
        <a
          href="https://www.mongodb.com/press/10gen-announces-company-name-change-mongodb-inc"
          target="_blank"
        >
          10gen
        </a>
        , way back in 2007. Something neat I learned this summer is that the “10” in “10gen”
        actually refers to the number “2” in binary form, and the “gen” in “10gen” is short for
        “generation”, leading to a clever word-play on the phrase “second generation”. After all,
        their idea revolved around building a “second generation” database, back when NoSQL wasn’t
        super popular yet.
      </p>
      <p>
        The location of the office can be both a blessing and a curse. Having an office in Times
        Square gets a bit hectic, and the feeling that people walk either too slowly front of you or
        too quickly behind you always managed to creep up on me every day, immediately after exiting
        the subway station. While Times Square tends to be very busy during the day, it tends to
        have a much calmer atmosphere at night, which I personally liked. I took the photo below
        after MongoDB took the interns out to see a Broadway show.
      </p>
      <img
        src={require('../../static/img/working-at-mongodb/times_square.jpg')}
        alt="Times Square"
      />
      <p>
        Having its headquarters in New York City is a nice perk, as there is a seemingly endless
        number of activities to be done within Manhattan itself, not to mention the other boroughs
        of New York. This is all without sacrificing the the office perks stereotypical to tech
        companies in the Bay Area, as one could find all of the same office perks (e.g. catered
        lunch, free snacks, nap rooms) at MongoDB.
      </p>
      <h2>The Work</h2>
      <p>
        Over the course of the summer, I worked as a software engineer in the distributed systems
        group, on the{' '}
        <a href="https://docs.mongodb.com/manual/sharding/" target="_blank">
          sharding
        </a>{' '}
        team. Needless to say, my contributions involved improving the sharding mechanisms of the
        MongoDB database. I felt particularly lucky, as I was able to work on a variety of different
        projects throughout the summer.
      </p>
      <h3>Improving Automatic Chunk-Splitting</h3>
      <p>
        The main project I was responsible for at MongoDB involved redesigning some of the logic
        behind auto-split, which partitions chunks of data within sharded collections into smaller
        pieces when those chunks become too large. Because auto-split is not a cheap operation, I
        worked on improving its performance by reducing the number of network calls made by and
        eliminating duplicate work done by <code>mongos</code> router nodes while executing
        auto-split. I also worked on the asynchronization of the operation so that auto-split does
        not block writes. Before this summer, tracking the approximate sizes of particular chunks
        that were written to was done within <code>mongos</code> router nodes. This required that
        the <code>mongos</code> routers make network calls to corresponding <code>mongod</code>{' '}
        shards every time a particular chunk got too large, as shown below.
      </p>
      <img
        src={require('../../static/img/working-at-mongodb/network_calls.png')}
        alt="Network Calls"
      />
      <p>
        By building a new method of tracking chunk sizes on the <code>mongod</code> side, MongoDB is
        now able to execude the auto-split operation without invoking an unnecessary number of
        network calls between <code>mongos</code> router nodes and <code>mongod</code> shards, as
        shown below.
      </p>
      <img src={require('../../static/img/working-at-mongodb/improved.png')} alt="Improved" />
      <p>
        Another benefit of this is that previously when multiple <code>mongos</code> router nodes
        were running simultaneously, each <code>mongos</code> router node would call the auto-split
        operation, because each would track its own copy of the chunk sizes. By moving the tracking
        logic over to <code>mongod</code>, an enormous amount of duplicate work is eliminated by
        multiple <code>mongos</code> routers all trying to perform the same task.
      </p>
      <h3>Refactoring Metadata Commands</h3>
      <p>
        The second project I worked on involved moving some of MongoDB’s metadata commands from
        router nodes to the config server. Metadata commands include commands that modify the state
        of the sharded cluster, such as <code>movePrimary</code>, <code>removeShard</code>, and{' '}
        <code>dropCollection</code>. Because users are able to run metadata commands concurrently, a
        router node must take one or more distributed locks from the config server before running a
        metadata command, so that the router node running the metadata command does not interfere
        with another router node running a metadata command that affects the same aspect of the
        cluster.
      </p>
      <p>
        Having these metadata commands run on the router nodes is suboptimal in the sense that there
        is a large dependency on brittle distributed locks. By moving the metadata commands onto the
        config server, these dependencies can be eliminated, and a more correct and coherent way to
        manipulate sharding metadata can be developed, and used as the groundwork for future
        improvements.
      </p>
      <h3>Nondeterminstic, FSM-Based Concurrency Testing</h3>
      <p>
        The last project I worked on was a bit more stand-alone and revolved around constructing a
        better way of testing the correctness of MongoDB’s metadata commands when multiple are run
        together concurrently. For example, the <code>removeShard</code> command can only remove a
        shard from a sharded cluster if the shard to be removed is not the primary shard. Hence, it
        makes sense to test the behavior of the cluster if <code>removeShard</code> is called on
        some shard <b>A</b> while <code>movePrimary</code> is simultaneously called to move the
        primary from some other shard <b>B</b> to shard <b>A</b>. That is, would it be possible that
        the cluster beings removing <b>A</b> before <b>A</b> becomes the primary, but <b>A</b>{' '}
        becomes the primary before it is removed? The aforementioned scenario would involve a
        sharded cluster with no primary, which is certainly not desired.
      </p>
      <p>
        In order to test the behavior of such scenarios, I used a finite-state-machine (FSM) based
        testing framework that simulated multiple threads being run concurrently by spawning
        multiple <code>mongo</code> instances and running metadata commands in each of those
        instances. Each
        <code>mongo</code> instance represented an FSM, with pre-specified states and probabilities
        connecting those states. Each FSM would then transition through its respective states in
        parallel with other FSMs, until the number of iterations specified is reached. For example,
        a concurrency test that tests <code>removeShard</code> and movePriamry simultaneously could
        be illustrated via the diagram below.
      </p>
      <img src={require('../../static/img/working-at-mongodb/fsm.png')} alt="FSM" />
      <p>
        Each thread within the test would begin in the <code>init</code> phase, and then transition
        between running the <code>removeShard</code> and <code>movePrimary</code> metadata commands
        until a set number of iterations has been reached. For example, a possible setup for this
        implementation could be written as the following.
      </p>
      <div className="highlight">
        <pre className="highlight">
          <code>
            <span className="c1">// Define the different states of the FSM and what should</span>
            <span className="c1">// be done in each state.</span>
            <span className="kd">const</span>
            <span className="nx">states</span>
            <span className="o">=</span>
            <span className="p">{'{'}</span>
            <span className="na">init</span>
            <span className="p">:</span>
            <span className="kd">function</span>
            <span className="nx">init</span>
            <span className="p">()</span>
            <span className="p">{'{'}</span>
            <span className="cm">{'/* ... */'}</span>
            <span className="p">{'}'},</span>
            <span className="na">movePrimary</span>
            <span className="p">:</span>
            <span className="kd">function</span>
            <span className="nx">movePrimary</span>
            <span className="p">()</span>
            <span className="p">{'{'}</span>
            <span className="cm">{'/* ... */'}</span>
            <span className="p">},</span>
            <span className="na">removeShard</span>
            <span className="p">:</span>
            <span className="kd">function</span> <span className="nx">removeShard</span>
            <span className="p">()</span> <span className="p">{'{'}</span>{' '}
            <span className="cm">{'/* ... */'}</span> <span className="p">}</span>
            <span className="p">};</span>
            <span className="c1">// Each FSM starts in the init state, and transitions to</span>
            <span className="c1">// next states based on specified probabilities.</span>
            <span className="kd">const</span> <span className="nx">transitions</span>{' '}
            <span className="o">=</span> <span className="p">{'{'}</span>
            <span className="na">init</span> <span className="p">:</span>{' '}
            <span className="p">{'{'}</span> <span className="na">movePrimary</span>
            <span className="p">:</span> <span className="mf">0.5</span>
            <span className="p">,</span> <span className="na">removeShard</span>
            <span className="p">:</span> <span className="mf">0.5</span>{' '}
            <span className="p">},</span>
            <span className="na">movePrimary</span> <span className="p">:</span>{' '}
            <span className="p">{'{'}</span> <span className="na">movePrimary</span>
            <span className="p">:</span> <span className="mf">0.2</span>
            <span className="p">,</span> <span className="na">removeShard</span>
            <span className="p">:</span> <span className="mf">0.8</span>{' '}
            <span className="p">},</span>
            <span className="na">removeShard</span> <span className="p">:</span>{' '}
            <span className="p">{'{'}</span> <span className="na">movePrimary</span>
            <span className="p">:</span> <span className="mf">0.8</span>
            <span className="p">,</span> <span className="na">removeShard</span>
            <span className="p">:</span> <span className="mf">0.2</span>{' '}
            <span className="p">}</span>
            <span className="p">};</span>
            <span className="kd">const</span> <span className="nx">threads</span>{' '}
            <span className="o">=</span> <span className="mi">2</span>
            <span className="p">;</span> <span className="c1">// number of FSMs</span>
            <span className="kd">const</span> <span className="nx">iterations</span>{' '}
            <span className="o">=</span> <span className="mi">10</span>
            <span className="p">;</span> <span className="c1">// iterations for each FSM</span>
            <span className="k">return</span> <span className="nx">runFSM</span>
            <span className="p">({'{'}</span>
            <span className="na">states</span>
            <span className="p">:</span> <span className="nx">states</span>
            <span className="p">,</span>
            <span className="na">transitions</span>
            <span className="p">:</span> <span className="nx">transitions</span>
            <span className="p">,</span>
            <span className="na">threads</span>
            <span className="p">:</span> <span className="nx">threads</span>
            <span className="p">,</span>
            <span className="na">iterations</span>
            <span className="p">:</span> <span className="nx">iterations</span>
            <span className="p">});</span>
          </code>
        </pre>
      </div>
    </BlogPost>
  );
};

export default WorkingAtMongodb;
