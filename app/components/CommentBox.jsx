define(['react', 'jquery', 'CommentList'],
    function(React, $, A) {
        $('body').append('<div id="content"></div>');
        var CommentBox = React.createClass({
            getInitialState: function() {
                return {
                    data: []
                };
            },
            loadCommentsFromServer: function() {
                $.ajax({
                    url: this.props.url,
                    dataType: 'json',
                    cache: false,
                    success: function(data) {
                        this.setState({ data: data });
                    }.bind(this),
                    error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });
            },
            componentDidMount: function() {
                this.loadCommentsFromServer();
                setInterval(this.loadCommentsFromServer, this.props.pollInterval);
            },
            handclick: function() {
                console.log(this.state.like);
                // this.state.like = !this.state.like;
                this.setState({ like: !this.state.like });
            },
            render: function() {
                return (
                    <div>
                        <h1>Comments</h1>
                        <A.CommentList data={this.state.data}/>
                        <A.CommentForm />
                    </div>
                );
            }
        });

        React.render(
            <CommentBox url="http://localhost:3000/api/comments" pollInterval={2000}/>,
            document.getElementById('content')
        );
    });
