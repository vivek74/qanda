import { useState, useEffect } from 'react';
import { navigate } from "@reach/router"
import { useDispatch, useSelector } from "react-redux";
import { setAnswer } from '../../store/actions';
import Card from '../../components/Card';
import Questioncard from '../../components/Questioncard';
import Button from '../../components/Button';
import data from '../../Data/data.json';

export default function Home() {
    const dispatch = useDispatch();
    const [answers, setAnswers] = useState([]);


    const saveAnswer = (answer, questionNo, orignalAnswer) => {
        const copyAnswers = [...answers]
        const searching = copyAnswers.find((val) => (Object.keys(val)[0] === questionNo));
        if (searching) {
            const index = copyAnswers.findIndex((val) => (Object.keys(val)[0] === questionNo))
            copyAnswers[index][questionNo] = answer;
            setAnswers(copyAnswers);
        } else {
            copyAnswers.push({[questionNo]: answer, orignalAnswer});
            setAnswers(copyAnswers);
        }
    }
    
    const submit = async () => {
        await dispatch(setAnswer(answers))
        navigate('/result')
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <>
            {
                data.map((val, key) => (
                    <Card key={key}>
                        <Questioncard 
                            question={`Q${key + 1}. ${val.question}`}
                            options={val.options}
                            answer={val.answer}
                            saveAnswer={saveAnswer}
                            questionNo={`Q${key + 1}`}
                            disabled={false}
                            pointColor="#0066b2"
                        />
                    </Card>
                ))
            }
            <Button disabled={!(data.length === answers.length)} onClick={submit}>Submit</Button>
        </>
    )
}
