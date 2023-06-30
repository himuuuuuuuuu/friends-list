import React from 'react';
import './App.css';

const App = () => <PersonList/>;

const PersonList = () => {

  const people =[

    {
      img:22,
      name: "John",
      job: "developer"
    },

    {
      img:34,
      name:"bob",
      job:"designer"
    },

    {
      img:56,
      name:"peter",
      job:"artist"
    }

  ];
  return (<section>
    <Person Person={people[0]}/>;
    <Person Person={people[1]}>
      Lorem ipsum dolor sit amet, con consectetur adipiscing elit in  
    </Person>
    <Person Person={people[2]}/>;
    </section>)
};

const Person = props => {
  const { img, name,job } = props.Person;
  const { children } = props;
  const url = 'https://randomuser.me/api/portraits/thumb/men/${img}.jpg';
  return (
  <div className="person">
    <img src ={url} alt="" />
    <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
    </div>

  </div>
  );
};





export default App;
