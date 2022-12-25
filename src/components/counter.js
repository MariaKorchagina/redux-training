import React from "react";
import { connect } from "react-redux";

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
//mapStateToProps - получает значения из store и передает в Counter
const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

export default connect(mapStateToProps)(Counter);

//connect - компонент НОС, создает внутри себя новый компонент. Этот компонент обрачивает компонент Counter. Внутри этого компонента получаем доступ ко всему store