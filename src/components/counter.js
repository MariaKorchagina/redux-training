import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from '../actions';

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    )
}
//получает значения из store и передает в Counter
const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

// выполняет тоже самое, что и ф-ция выше, но работает с dispatch
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
    //actions связываются с ф-цией dispatch и результирующие св-ва присваиваются нашему объекту
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//connect - компонент НОС, создает внутри себя новый компонент. Этот компонент обрачивает компонент Counter. Внутри этого компонента получаем доступ ко всему store