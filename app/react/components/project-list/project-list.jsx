import React from "react";
import {Link} from "react-router";
import DataCard from "../../components/data-card/data-card.jsx";
import UserList from "../../components/user-list/user-list.jsx";


export default React.createClass({
  propTypes: {
    projects: React.PropTypes.array
  },
  getDefaultProps() {
    return {
      projects: []
    };
  },
  formatTags(project) {
    let tags = null;

    if (project.tags && project.tags.length) {
      tags = (<div className="help-with p-y-1">Help with:&nbsp;
        {project.tags.map((tag)=> {
          return <span className="project-tag" key={tag}><Link to="#">{tag}</Link></span>;
        })}
      </div>
      );
    }
    return tags;
  },
  render() {
    return(
      <div className="row">
        {this.props.projects.map((project) => {
          return (
            <DataCard key={project.id} className="col-md-4" showPicture={false} categories={project.categories}>
              <div className="profile-photos">
                <UserList users={project.leads} name={false} />
              </div>
              <div>
                <UserList users={project.leads} avatar={false} />
                <span> for </span>
                <span className="institution">{project.institution}</span>
              </div>
              <Link to={`projects/${project.slug}`} className="project-name m-t-1">{project.name}</Link>
              <div className="project-description m-t-1">{project.short_description}</div>
              {this.formatTags(project)}
            </DataCard>
          );
        })}
      </div>
    );
  }
});
