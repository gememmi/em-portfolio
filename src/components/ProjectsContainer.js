import ProjectShow from "./ProjectShow"

function ProjectsContainer() {

    const projectsList = [
    {title: "StarBright",
    subtitle:"Fullstack Mood Tracker" ,
    demo: "https://www.loom.com/embed/8a255f28f87c47918d30dd16102bba52?sid=6e9b1ac6-2f03-41ce-b945-7ed4bee76680",
    description: "I used Ruby on Rails and PostgreSQL to construct the apps database and API. OAuth was implemented to authorize and authenticate users. The frontend is made entirely from React.js and CSS. I also used ChartJS. The purpose of this app is to allow a user to create an account where they can privately log thier moods,feelings and daily intentions. As more data is collected, they will be able to view a chart that documents their moods over time, as they have rated each mood on a scale from 1 to 5.",
    github: "https://github.com/gememmi/StarBright"
    },
     {title: "Rome" ,
     subtitle:"Fullstack Reddit Clone" ,
     demo: "https://www.loom.com/embed/43bc1bbc37a04093ab0e085206a40735?sid=e5a33216-7431-4beb-a909-c48f111846d4",
     description:"Working with a peer, we created a database and API with Ruby on Rails and PostgreSQL. Our client-side was created using React.js and Material UI. This app alows users to create secure accounts, using OAuth, so that they can log in, register, and manage their content. The user is able to comment, edit and delete their content as well as view a feed of the most recelty posted content." ,
     github: "https://github.com/jackholmes97/roam-project3"
    },
    {title: "Journey Back to Flatiron",
    subtitle: "Fullstack Narrative Video Game",
     demo:"https://www.loom.com/embed/1c85e7c990e7429eb0c78705f3a813c8?sid=1b78ecde-3b1f-4c13-900b-9ea3172ea333",
     description:"Using Ruby an SQL, programming team and I created our database and API. We used Sinatra to handle dynamic routing and send HTTP requests. Our frontend was made from Reat.js and CSS. Our game allows the user to select a play from a cast, who all have different strengths and weaknesses. The user is then lead through a series of trails and must choose how their character will react. With each failed attempt, the users character will lose energy." ,
     github:"https://github.com/gememmi/Journey-Back-to-Flatiron"
    },
    {title:"Aaron and Emily Bookshop",
    subtitle: "Static Bookshop Site" ,
     demo: "https://www.loom.com/embed/8af0d2232ec747a586a822040a8f4c86?sid=3ec2c7a6-5ff8-4e29-b445-37df9a24374e" ,
     description:"My peer and I created a frontend app to serve as the site from a local bookshop. The user can view our product collection, select which books to place in their cart, and make purchases with the $50 gift card they have been granted, until funds run out! We used React.js, MaterialUI, and CSS for our client side and then created a server using JSONServer.",
     github:"https://github.com/gememmi/AaronEmilyBookshop"
    },
     {title:"It's 5 o'clock...Somewhere!" ,
      subtitle: "Static Frontend Brewery Site",
      demo:"https://www.loom.com/embed/3c983c68eb8747258fc1e75f09422141?sid=64d974ca-ab0a-4535-bfb7-233419dffdff",
      description:"A user can search through a list of local NYC breweries, view information about theses places, and add any of them to their list of favorites. The use can also filter through all the locations to find the ones in their area code, by type of brewery, or simply by name. My partner and I created our site using JavaScript, CSS, and JSONServer." ,
      github:"https://github.com/gememmi/5oClockSomewhere"
    },
    ]
    const projects = projectsList.map((project) => {
        return (
            <ProjectShow 
            id={project.id}
            title={project.title}
            subtitle={project.subtitle}
            demo={project.demo}
            description={project.description}
            github={project.github}
            />
        )
    })
    return (
        <div>
            {projects}
        </div>
    )
};

export default ProjectsContainer;



