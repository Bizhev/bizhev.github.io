import * as PubSub from 'pubsub-js'
// create a function to subscribe to topics
var mySubscriber = function (msg, data) {
    console.log(msg, data+'2');
};

// add the function to the list of subscribers for a particular topic
// we're keeping the returned token, in order to be able to unsubscribe
// from the topic later on
var token = PubSub.subscribe('MY TOPIC', mySubscriber);

// publish a topic asyncronously

// // publish a topic syncronously, which is faster in some environments,
// // but will get confusing when one topic triggers new topics in the
// // same execution chain
// // USE WITH CAUTION, HERE BE DRAGONS!!!
// PubSub.publishSync('MY TOPIC', 'hello world!');
