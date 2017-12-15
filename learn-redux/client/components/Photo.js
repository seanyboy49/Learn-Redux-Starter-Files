import React from 'React';
import { Link } from 'react-router';

class Photo extends React.Component {
  render() {
    const { post, i, comments } = this.props;
    return(
      <figure className="grid-figure">
        <div>
          <Link to={`/view/${post.code}`} >
            <img src={post.display_src} alt={post.caption} className="grid-photo" />
          </Link>
        </div>
      </figure>
    )
  }
}

export default Photo;

