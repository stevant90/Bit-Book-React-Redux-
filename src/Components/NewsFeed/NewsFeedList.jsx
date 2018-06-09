import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe';
import { Grid, Image, Segment, Feed, Icon, Message } from 'semantic-ui-react';

export default class NewsFeedList extends Component {


    static propTypes = {
        post: PropTypes.object,
        errorMessage: PropTypes.string
    };

    render() {

        const { post, errorMessage } = this.props;
        const { userId, text, imageUrl, videoUrl, commentsNum, dateCreated, userDisplayName, id } = post;

        const postDate = new Date(dateCreated);
        const displayPostDate = postDate.toDateString();
        const postTime = postDate.toLocaleTimeString();
        const displayComments = commentsNum > 1 ? 'Comments' : 'Comment'

        const rootEmbedUrl = 'https://www.youtube.com/embed/';
        const partOfUrl = 'https://youtu.be/';
        const listUrl = '&list='
        let youTubeVideoUrl;

        if (videoUrl !== undefined) {
            youTubeVideoUrl = videoUrl.slice(videoUrl.indexOf('=') + 1);
        }


        if (videoUrl !== undefined && videoUrl.includes(partOfUrl)) {
            youTubeVideoUrl = videoUrl.slice(partOfUrl.length);
        } else if (videoUrl !== undefined && videoUrl.includes(rootEmbedUrl)) {
            youTubeVideoUrl = videoUrl.slice(rootEmbedUrl.length);
        } else if (videoUrl !== undefined && videoUrl.includes(listUrl)) {
            youTubeVideoUrl = videoUrl.slice(videoUrl.indexOf('=') + 1, videoUrl.indexOf('&'))
        }

        if (post.type === 'text') {
            return (
                <Grid stackable>

                    {!!errorMessage
                        && <Message
                            error
                            header='Whoops!'
                            content={errorMessage}
                        />}

                    <Segment className='FeedSegment'>
                        <Grid.Row>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Link to={`/people/${userId}`}>{userDisplayName}</Link> posted a text post
                                    <Feed.Date> at: {displayPostDate} in: {postTime}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra text>
                                            {text}
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='comment' />
                                                {commentsNum} {displayComments}
                                            </Feed.Like>
                                        </Feed.Meta>
                                        <Link to={`/feed/TextPosts/${id}`} className='SinglePostLink'>Read more >>></Link>
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Grid.Row>
                    </Segment>
                </Grid>
            );
        }

        if (post.type === 'image') {
            return (
                <Grid stackable>

                    {!!errorMessage
                        && <Message
                            error
                            header='Whoops!'
                            content={errorMessage}
                        />}

                    <Segment className='FeedSegment'>
                        <Grid.Row>
                            <Feed>
                                <Feed.Event>
                                    <Feed.Content>
                                        <Feed.Summary>
                                            <Link to={`/people/${userId}`}>{userDisplayName}</Link> posted a image post
                                <Feed.Date> at: {displayPostDate} in: {postTime}</Feed.Date>
                                        </Feed.Summary>
                                        <Feed.Extra images>
                                            <Image size='massive' src={imageUrl} />
                                        </Feed.Extra>
                                        <Feed.Meta>
                                            <Feed.Like>
                                                <Icon name='comment' />
                                                {commentsNum} {displayComments}
                                            </Feed.Like>
                                        </Feed.Meta>
                                        <Link to={`/feed/ImagePosts/${id}`} className='SinglePostLink'>Read more >>></Link>                                        
                                    </Feed.Content>
                                </Feed.Event>
                            </Feed>
                        </Grid.Row>
                    </Segment>
                </Grid>
            );
        }

        return (
            <Grid stackable>

                {!!errorMessage
                    && <Message
                        error
                        header='Whoops!'
                        content={errorMessage}
                    />}

                <Segment className='FeedSegment'>
                    <Grid.Row>
                        <Feed>
                            <Feed.Event>
                                <Feed.Content>
                                    <Feed.Summary>
                                        <Link to={`/people/${userId}`}>{userDisplayName}</Link> posted a video post
                            <Feed.Date> at: {displayPostDate} in: {postTime}</Feed.Date>
                                    </Feed.Summary>
                                    <Feed.Extra>
                                        <Iframe
                                            url={`https://www.youtube.com/embed/${youTubeVideoUrl}`}
                                            display="initial"
                                            position="relative"
                                            allowFullScreen
                                            height='300px'
                                        />
                                    </Feed.Extra>
                                    <Feed.Meta>
                                        <Feed.Like>
                                            <Icon name='comment' />
                                            {commentsNum} {displayComments}
                                        </Feed.Like>
                                    </Feed.Meta>
                                    <Link to={`/feed/VideoPosts/${id}`} className='SinglePostLink'>Read more >>></Link>                                    
                                </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Grid.Row>
                </Segment>
            </Grid>
        );
    }
}