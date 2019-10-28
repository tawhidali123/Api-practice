import React from 'react';

class Api extends React.Component {

    state = {
        loading: true,
        person: null,
    };

    handleClick = () => {
        console.log("clicked")
    }


    componentDidMount(){
        // const url = "https://anapioficeandfire.com/api/characters";
        // const response = await fetch(url);
        // const data = await response.json();
        fetch(`https://anapioficeandfire.com/api/characters`)
        .then(resp => resp.json())
        .then(data =>  {
            console.log(data)
            let apiPerson = data[0].aliases[0]
            

            

            this.setState({person: apiPerson, loading: false})
        })
    
    }
    

    render(){
        return(
            <div onClick={this.handleClick}>
                {this.state.loading || !this.state.person ? 
                    (<div>loading..</div>) : 
                    (<div>{ this.state.person }</div>)
                }
            </div>
        );
    }


}

export default Api;