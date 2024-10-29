import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import '../index.css'
import '../App.css'

interface InterpretationProps {
    setState: (state: string) => void
    nickname: string
    setNickname: (nickname: string) => void
}

// Simulated database of TAT images
const tatImages = [
    { id: 1, src: "../../public/Fig1.jpg", alt: "図版１" },
    { id: 2, src: "../../public/Fig2.jpg", alt: "図版２" },
    { id: 3, src: "../../public/Fig3.jpg", alt: "図版３" },
    { id: 4, src: "../../public/Fig4.jpg", alt: "図版４" },
    { id: 5, src: "../../public/Fig5.jpg", alt: "図版５" },
    { id: 6, src: "../../public/Fig6.jpg", alt: "図版６" },
    { id: 7, src: "../../public/Fig7.jpg", alt: "図版７" },
    { id: 8, src: "../../public/Fig8.jpg", alt: "図版８" },
    { id: 9, src: "../../public/Fig9.jpg", alt: "図版９" },
    { id: 10, src: "../../public/Fig10.jpg", alt: "図版１０" },
]

const Interpretation: React.FC<InterpretationProps> = ({ setState,nickname }) => {
    const [interpretation, setInterpretation] = React.useState('')
    const [interpretations, setInterpretations] = React.useState([''])
    const [currentImage, setCurrentImage] = React.useState(0)
    const saveAll = async (e: React.FormEvent) => {
        e.preventDefault();
        const baseURL = process.env.NODE_ENV === 'production'
        ? 'https://artinnovation-6c8774b7024e.herokuapp.com'
        : 'http://127.0.0.1:8000';
        try {
            const response = await fetch(`${baseURL}/saveTATData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nickname: nickname,
                    interpretations: interpretations,
                }),
            });

            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            console.log('Success:', response);
        } catch (error) {
            console.error('Error', error);
        }
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (currentImage === tatImages.length - 1) {
            saveAll(e)
            setState('description')
        }
        setInterpretations([...interpretations, interpretation])
        setCurrentImage(currentImage + 1)
        setInterpretation('')
    }

    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
            <CardHeader>
                <CardTitle>{tatImages[currentImage].alt}</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                src={tatImages[currentImage].src}
                alt={tatImages[currentImage].alt}
                className="w-full h-auto"
                />
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>物語</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                <Textarea
                    // value={interpretation}
                    // onChange={(e) => setInterpretation(e.target.value)}
                    placeholder={`
考えた物語を入力してください。
フォームは右下をドラッグして大きさを変えられます。

この絵の中の人は今何を感じ、どうしているのか、この絵の前にはどんなことがあって、この絵の後にはどうなっていくのか、話の筋を付けて話してください。
およそ200~300字程度の短いもので構いません。`}
                    className="mb-4"
                    value={interpretation}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setInterpretation(e.target.value)}
                />
                <Button type="submit">完了</Button>
                </form>
            </CardContent>
            </Card>
        </div>
        </div>
    )
}

export default Interpretation;