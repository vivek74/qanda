import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default function QuestionCard({
    question,
    options,
    saveAnswer,
    questionNo,
    answer,
    disabled,
    disabledColor,
    userSelectedAnswer,
    pointColor,
}) {

    const selectAnswer = (value) => {
        if (saveAnswer){
            saveAnswer(value, questionNo, answer)
        }
    }

    return (
        <>
            <h3>{question}</h3>
            <RadioGroup value={userSelectedAnswer} disabled onChange={selectAnswer}>
                {
                    options.map((val, key) => (
                        <RadioButton
                            rootColor="black"
                            pointColor={pointColor}
                            key={key}
                            value={val.key}
                            disabled={disabled}
                            disabledColor={disabledColor}
                        >
                            {`${key + 1}. ${val.option}`}
                        </RadioButton>
                    ))
                }
            </RadioGroup>
        </>
    )
}