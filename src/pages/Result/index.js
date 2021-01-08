import { useEffect, useState } from 'react';
import { navigate } from "@reach/router"
import { useSelector } from "react-redux";
import Card from '../../components/Card';
import Questioncard from '../../components/Questioncard';
import Button from '../../components/Button';
import data from '../../Data/data.json';
import { RightAnswer, WrongAnswer } from './style';

export default function Result() {
    const newData = JSON.parse(JSON.stringify(data))
    const answers = useSelector((state) => state.answers);
    const [allQuestion, setAllQuestion] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();
    // const answers = [
    //     {Q1: "2", orignalAnswer: "1"},
    //     {Q1: "3", orignalAnswer: "3"},
    //     {Q1: "4", orignalAnswer: "1"},
    //     {Q1: "1", orignalAnswer: "1"} 
    // ]

    const searchRightAnswer = (key) => {
        const rightObject = answers.find((val) => (Object.keys(val)[0] === `Q${key + 1}`))
        const rightAnswer = rightObject[`Q${key + 1}`]
        return rightAnswer
    }

    useEffect(() => {
        if (answers.length === 0) {
            navigate('/')
        } else {
            window.scrollTo(0, 0)
            const finalArray = newData.map((val, key) => ({
                question : val.question,
                options: val.options,
                answer: val.answer,
                questionNo: `Q${key + 1}`,
                selectedAnswer: searchRightAnswer(key)
            }))

            setAllQuestion(finalArray);
            let count = 0;
            answers?.map((val, key) => {
                if (val[Object.keys(val)[0]] === val?.orignalAnswer) {
                    count = count + 1;
                }
            })
            setCorrectAnswer(count)
        }
    }, [answers])
    return (
        <>
            <Card>
                {
                    answers && (
                        <>
                            <h2>Result</h2>
                            <h3>Total marks: {answers.length}</h3>
                            <h3>Correct answers: {correctAnswer}</h3>
                            <h3>Percentage: {((correctAnswer * 100) / data?.length)}</h3>
                        </>
                    )
                }
            </Card>
            {
                (allQuestion) && (
                    allQuestion?.map((val, key) => (
                        <Card key={key}>
                            <Questioncard
                                userSelectedAnswer={val.selectedAnswer} 
                                question={`Q${key + 1}. ${val.question}`}
                                options={val.options}
                                answer={val.answer - 1}
                                questionNo={val.questionNo}
                                disabled={false}
                                disabledColor='black'
                                pointColor={(val.answer - 1 === val.selectedAnswer - 1) ? 'green' : 'red'}
                            />
                            {
                                !(val?.answer === val?.selectedAnswer) && (
                                    <>
                                        <WrongAnswer>Your answer: {val.options[val?.selectedAnswer - 1].option}</WrongAnswer>
                                        <RightAnswer>Right Answer: {val.options[val?.answer - 1].option} </RightAnswer>
                                    </>
                                )
                            }
                        </Card>
                    ))
                )
            }
            <Button disabled={!(data.length === answers.length)} onClick={() => {navigate('/')}}>Reset</Button>
        </>
    )
}