import React from 'react';
import ProjectCard from './common/ProjectCard';

const projects = [
    {
        projectShortName: 'FS ACI',
        projectLongName: 'Field Services Associate Call In',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [
            {
                linkName: 'GitHub',
                link: 'https://www.github.com/',
            },
            {
                linkName: 'GitHub',
                link: 'https://www.github.com/',
            },
        ],
    },
    {
        projectShortName: 'proj1',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj2',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj3',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj4',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj5',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj6',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj7',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
    {
        projectShortName: 'proj8',
        projectLongName: null,
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id est enim. Sed magna orci, dictum ut neque nec, eleifend mattis velit. Pellentesque ipsum nibh, tempor vel nunc vehicula, molestie lacinia mi. Praesent nec varius nibh. Etiam viverra enim non dui tempor, ut convallis sapien pretium. Morbi sit amet nisi augue. Proin nec suscipit odio. Nulla auctor placerat lacus. Maecenas at nisi ut erat fermentum commodo. Mauris nec neque tortor. Integer efficitur commodo velit, in elementum magna feugiat sit amet. Mauris commodo cursus enim, sed efficitur dui ullamcorper aliquet. Sed augue tellus, imperdiet id laoreet vel, fermentum ac metus. Nunc aliquet a leo sed hendrerit.',
        coverImg:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/800px-Walmart_logo.svg.png',
        avatarImg:
            'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        cardActions: [],
    },
];

export default function DetailedProjects(props) {
    return (
        <div
            style={{
                margin: '15px',
            }}
        >
            {projects.map((project, projectIndex) => {
                return <ProjectCard project={project} index={projectIndex} />;
            })}
        </div>
    );
}
