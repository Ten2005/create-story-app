import React from "react";
// import { useState } from "react";
import '../index.css'
import '../App.css'
import { Button } from "@/components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
Tabs,
TabsContent,
TabsList,
TabsTrigger,
} from "@/components/ui/tabs"

interface DescriptionProps {
    setState: (state: string) => void
    nickname: string
    setNickname: (nickname: string) => void
}

const Description: React.FC<DescriptionProps> = ({ setState,nickname,setNickname }) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    };

    const handleSubmit = () => {
        console.log('Nickname:', nickname);
        setState('interpretation');
    };
return (
    <Tabs defaultValue="account" className="w-fit max-w-screen-md">
    <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">TATについて</TabsTrigger>
        <TabsTrigger value="password">始める</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
        <Card>
        <CardHeader>
            <CardTitle className="text-start">概要</CardTitle>
            <CardDescription className="text-start">
            TAT（Thematic Apperception Test）とは、1943年にマレーとモーガンを中心としたハーバード心理学クリニックのスタッフが作成した性格検査です。別名「主題統覚検査」とも呼ばれます。<br />
            ある場面が描かれた20枚のカードを提示され、それぞれのカードに対して想像して物語を作る検査方法です
            </CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle className="text-start">流れ</CardTitle>
            <CardDescription className="text-start">
            これから色々な人や景色の書かれた絵が表示されます。この絵を見て思い浮かぶ物語を作って、入力してください。<br />
            この絵の中の人は今何を感じ、どうしているのか、この絵の前にはどんなことがあって、この絵の後にはどうなっていくのか、話の筋を付けて話してください。<br />
            およそ200~300字程度の短いもので構いません。<br />
            絵は10枚あります。1枚づつ表示されますので、1枚につき1つ物語を作成してください。
            </CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle className="text-start">注意点</CardTitle>
            <CardDescription className="text-start">
            特になし
            </CardDescription>
        </CardHeader>
        </Card>
    </TabsContent>
    <TabsContent value="password">
        <Card>
        <CardHeader>
            <CardTitle>始める前に</CardTitle>
            <CardDescription className="text-start">
            ニックネームを入力してください。<br />
            ただし、これはユーザーを一意的に識別するためのもので、作成された物語と個人を結びつけることはありません。
            </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
            <div className="space-y-1">
            <Label htmlFor="current">ニックネーム</Label>
            <Input id="current" type="text" value={nickname} onChange={handleInputChange}/>
            </div>
        </CardContent>
        <CardFooter>
            <Button className="mr-0 ml-auto" onClick={handleSubmit}>Start</Button>
        </CardFooter>
        </Card>
    </TabsContent>
    </Tabs>
)
}

export default Description;