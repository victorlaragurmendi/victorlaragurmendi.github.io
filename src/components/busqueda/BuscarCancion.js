import React, { Component } from 'react';

class BusquedaCancion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            music: [],
            query: '',
            playlist:[]

        }
        this.capturarInput = this.capturarInput.bind(this)
        this.ejecutarBusqueda = this.ejecutarBusqueda.bind(this)
    }

    capturarInput(e) {

        const { value } = e.target

        this.setState({
            ...this.state,
            query: value
        })

        // this.componentD()
    }




    ejecutarBusqueda(e) {
        if (e.keyCode === 13) {
            console.log('ejecutando busqueda')
            console.log(this.state)
            this.componentD()


        }
    }

    componentD() {
        fetch(`https://rapidapi.p.rapidapi.com/search?q=${this.state.query}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                "x-rapidapi-key": "b4468d6023msh4b72268c0c00d0fp1c7322jsned3499584d20"
            }
        })
            .then(response => response.json())
            .then(algo => this.setState({ music: algo.data }))
            .catch(err => {
                console.error(err);
            });
    }

    render() {
        const { music } = this.state;
        return (
            <div style={{ marginLeft: '2.4rem' }}>
                <input type="text" placeholder="Buscar cancion + ENTER" onChange={this.capturarInput} onKeyDown={this.ejecutarBusqueda} ></input>
                <div>
                    <h3>{music && music.map((item, i) => {
                        return <div key={i}>
                            <ul style={{ listStyleType: "none" }}>
                                <li>
                                    <h4>{item.title}</h4>
                                    <img src={item.artist.picture_small}></img>
                                    <h3>{item.artist.name}</h3>
                                    <audio src={item.preview} type="audio/mp3" controls />
                                    
                                </li>
                                <li><button class="btn btn-primary" type="submit">agregar a la lista...</button></li>
                            </ul>
                        </div>
                    })}
                    </h3>
                </div>
            </div>
        )
    }

}

export default BusquedaCancion;
