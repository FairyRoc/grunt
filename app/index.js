/**
 * Created by roc
 */
require.config({
    paths: {
        jquery: 'bower_components/jquery/dist/jquery',
        jq: './components/jq',
        react: 'bower_components/react/react',
        CommentBox: './components/CommentBox',
        Comment: './components/Comment',
        CommentList: './components/CommentList'
    }
});
requirejs(['CommentBox'],
	function(com) {
    console.log('yeah!');
});
