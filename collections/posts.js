Posts = new Meteor.Collection('posts');
Posts.allow({
    insert: function(userId, doc) {
        // onlh allow posting if logged in
        return !! userId;   
    }
});
