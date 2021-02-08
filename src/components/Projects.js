import React from 'react'
import ProjectRow from './projectCards/projectRow'

export default function Projects() {
    return (
        <div>
            <ProjectRow 
            background='rgb(208,205,219)'
            title='Always Available Magic Budget Tracker'
            repoLink='https://github.com/valadezMykel/Always_Avalible_Magic_Bidget_Tracker' 
            deployLink='https://arcane-gorge-45702.herokuapp.com/'
            description="What makes this budget tracker app so magical is the fact that it works completely offline, and once you reconnect to the internet all of the data stored offline gets sent to a database with the rest of your data.  This blew my mind when I found out how to do this.  I accomplished this using the browser's indexDB feature to store data offline and a service worker to redirect database calls when a connection was unavailable."
            isReversed={false}
            image='/projectImgs/budget_tracker.png'
            />
            <ProjectRow
            background='rgb(214,242,255, .7)' 
            title='Your Digital Elf'
            repoLink='https://github.com/yourDigitalElf/yourDigitalElf' 
            deployLink='https://fast-anchorage-28495.herokuapp.com'
            description='Your Digital Elf is fun way to keep track of your friends and families christmas list.  Sign up is easy and if you want your own version for your specific holiday gift list fork the repository for yourself.'
            isReversed={true}
            image='/projectImgs/yourdigitalelf.gif'
            />
            <ProjectRow 
            background='rgb(230,225,215)'
            title='Workout Magic'
            repoLink='https://github.com/valadezMykel/Workout_Magic' 
            deployLink='https://infinite-eyrie-49427.herokuapp.com/?id=6004b20a4b1ddd0015e9b362'
            description='This project is designed as a way for clients to track their workouts in a way that gave them a way to visually track their projects.  As an exercise this project helped me to refine my ability to work with non-relational databases, specifically mongooseDB.  Exploring the advantages and disadvantages of a nosql database and how to use it effectively.'
            isReversed={false}
            image='/projectImgs/workout_magic.png'
            />
        </div>
    )
}