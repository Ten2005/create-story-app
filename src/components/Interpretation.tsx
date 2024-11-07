import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import '../index.css'
import '../App.css'

interface InterpretationProps {
    setState: (state: string) => void
    nickname: string
    isOriginal: boolean
}

// Simulated database of TAT images
const tatImages = [
    { id: 1, src: "/Fig1.jpg", alt: "図版１" },
    { id: 2, src: "/Fig2.jpg", alt: "図版２" },
    { id: 3, src: "/Fig3.jpg", alt: "図版３" },
    { id: 4, src: "/Fig4.jpg", alt: "図版４" },
    { id: 5, src: "/Fig5.jpg", alt: "図版５" },
    { id: 6, src: "/Fig6.jpg", alt: "図版６" },
    { id: 7, src: "/Fig7.jpg", alt: "図版７" },
    { id: 8, src: "/Fig8.jpg", alt: "図版８" },
    { id: 9, src: "/Fig9.jpg", alt: "図版９" }
]

const tatmagesOriginal = [
    { id: 1, src: "/fig-original1.jpg", alt: "図版１" },
    { id: 2, src: "/fig-original2.jpg", alt: "図版２" },
    { id: 3, src: "/fig-original3.jpg", alt: "図版３" },
    { id: 4, src: "/fig-original4.jpg", alt: "図版４" },
    { id: 5, src: "/fig-original5.jpg", alt: "図版５" },
    { id: 6, src: "/fig-original6.jpg", alt: "図版６" },
    { id: 7, src: "/fig-original7.jpg", alt: "図版７" },
    { id: 8, src: "/fig-original8.jpg", alt: "図版８" },
    { id: 9, src: "/fig-original9.jpg", alt: "図版９" },
    { id: 10, src: "/fig-original10.jpg", alt: "図版１０" },
]

const Interpretation: React.FC<InterpretationProps> = ({ setState,nickname,isOriginal }) => {
    const [interpretation, setInterpretation] = React.useState('')
    const [interpretations, setInterpretations] = React.useState<string[]>([])
    const [currentImage, setCurrentImage] = React.useState(0)
    const usedImages = isOriginal ? tatmagesOriginal : tatImages;
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setInterpretations([...interpretations, interpretation]);
        if (currentImage === usedImages.length - 1) {
            const baseURL = process.env.NODE_ENV === 'production'
                ? 'https://artinnovation-6c8774b7024e.herokuapp.com'
                : 'http://127.0.0.1:8000';
            fetch(`${baseURL}/saveTATData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nickname: nickname,
                    interpretations: [...interpretations, interpretation],
                }),
            }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                console.log('Success:', response);
            }).catch(error => {
                console.error('Error', error);
            });
            setState('end');
        }

        setCurrentImage(prev => prev + 1);
        setInterpretation('');

    }
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentImage]);
    return (
        <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
            <CardHeader>
                <CardTitle>{usedImages[currentImage].alt}</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                src={usedImages[currentImage].src}
                alt={usedImages[currentImage].alt}
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
                    placeholder={`
思い浮かんだ物語を自由に作ってください。
登場人物がどのような状況にいるのか、何を考え、どのような気持ちなのかを想像し、その場面の前後（過去や未来）について自由に語ってください。
正解はありませんので、ご自身の思った通りに物語を作ってください。
`}
                    className="mb-4 min-h-[250px]"
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