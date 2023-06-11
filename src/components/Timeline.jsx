import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

function Timeline() {
  const timelineElements = [
    {
      title:
        'Looking for Fall internship, Co-developing a no code tool for building AI Chatbots',
      subtitle: '',
      date: 'Now',
      description: 'Built Penpal, an AI company focusing on...',
      backgroundColor: 'rgb(233, 30, 99)',
      iconColor: '#fff',
    },
    {
      title: 'Extended Reality Specialities',
      subtitle: 'University of Rochester',
      date: 'Oct 2022 - Present',
      description: 'Pursuing Extended Realities specialities...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },

    {
      title: 'Developed my first VR Tour',
      subtitle: 'African Leadership Academy',
      date: 'Apr 2022- Jul 2022',
      description: 'Developed a virtual tour for African Leadership Academy...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },
    {
      title: 'Graphics Designer @ZNotes',
      subtitle: 'Utilized Photoshop, illustrator, After Effects',
      date: 'Jun 2021 - Dec 2021',
      description: 'Worked as a Graphics Designer at ZNotes...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },

    {
      title: 'IT Intern',
      subtitle: 'African Leadership Academy',
      date: 'Jan 2021 - Jul 2021',
      description: 'Served as an IT Intern at African Leadership Academy...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },
    {
      title: 'Joined Zimbabwe Robotics Team',
      subtitle: 'Software team lead, coding in Python',
      date: 'Jan 2018 - Sept 2019',
      description:
        'Led the software development team at Zimbabwe Robotics Team...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },
    {
      title: 'Started 3D Modelling',
      subtitle: 'Best Mechanical Designer 2016-18, Autodesk',
      date: 'Jan 2017 - Dec 2018',
      description: 'Served as an IT Intern at African Leadership Academy...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },
    {
      title: 'Built My First Robot',
      subtitle: 'Started coding in Python',
      date: '2015',
      description: 'Built my first robot and won the Innovator Award...',
      backgroundColor: 'rgb(33, 150, 243)',
      iconColor: '#fff',
    },
  ]

  return (
    <VerticalTimeline>
      {timelineElements.map((element, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--work ${
            element.darkMode ? 'dark' : 'text-white'
          }`}
          contentStyle={{ background: element.backgroundColor, color: '#fff' }}
          contentArrowStyle={{
            borderRight: `7px solid ${element.backgroundColor}`,
          }}
          date={element.date}
          iconStyle={{
            background: element.backgroundColor,
            color: element.iconColor,
          }}
        >
          <h3 className="vertical-timeline-element-title text-xl font-bold">
            {element.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle text-lg">
            {element.subtitle}
          </h4>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default Timeline
