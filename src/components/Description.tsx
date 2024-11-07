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
        <TabsTrigger value="account">実施について</TabsTrigger>
        <TabsTrigger value="password">始める</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
        <Card>
        <CardHeader>
            <CardTitle className="text-start">流れ</CardTitle>
            <CardDescription className="text-start">
            これから数枚の絵を見ていただきます。<br />
            絵にはさまざまな場面が描かれていますが、それについて，思い浮かんだ物語を自由に作ってください。
            登場人物がどのような状況にいるのか、何を考え、どのような気持ちなのかを想像し、その場面の前後（過去や未来）についても自由に語ってください。<br />
            正解はありませんので、ご自身の思った通りに物語を作ってください。
            </CardDescription>
        </CardHeader>
        <CardHeader>
            <CardTitle className="text-start">注意点</CardTitle>
            <CardDescription className="text-start">
                <br />
                ・特に指示のない限り、default-imgを選択してください。<br />
                ・ブラウザをリロードすると、入力した内容は消えてしまいます。<br />
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