import React from 'react'
import { useState } from 'react'
import MyButton from './MyButton'
import ResultBar from './ResultBar'

const Calculator = () => {
    const [text, setText] = useState('')
    const [lastChar, setLastChar] = useState('')
    // Click butons numerics
    const onClickBtnNum = (val) => {
        if(isNaN(val.value)) {
            if(val.value !== lastChar){
                setText(text +""+ val.value);
            }
        }else{
            setText(text +""+ val.value);
        }
        setLastChar(val.value);
    }
    // Click AC button
    const onClickAc = () => {
        setText('');
    }
    // Click equal button
    const onClickEqual = () => {
        setText(eval(text));
    }
    return (
        <table className="table">
            <tbody>
                <tr>
                    <td colSpan="3">
                        <ResultBar text={text}/>
                    </td>
                    <td>
                        <MyButton value={"AC"} text={"AC"} cssClass={"btnClear"} onClick={onClickAc}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MyButton value={7} text={"7"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={8} text={"8"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={9} text={"9"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={"+"} text={"+"} cssClass={"btnOper"} onClick={onClickBtnNum}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MyButton value={4} text={"4"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={5} text={"5"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={6} text={"6"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={"-"} text={"-"} cssClass={"btnOper"} onClick={onClickBtnNum}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MyButton value={1} text={"1"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={2} text={"2"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={3} text={"3"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={"*"} text={"*"} cssClass={"btnOper"} onClick={onClickBtnNum}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MyButton value={0} text={"0"} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={"."} text={"."} cssClass={"btnNum"} onClick={onClickBtnNum}/>
                    </td>
                    <td>
                        <MyButton value={"="} text={"="} cssClass={"btnEqual"} onClick={onClickEqual}/>
                    </td>
                    <td>
                        <MyButton value={"/"} text={"/"} cssClass={"btnOper"} onClick={onClickBtnNum}/>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Calculator


