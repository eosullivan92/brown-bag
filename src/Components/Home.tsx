import { SetStateAction } from "react";

export default function Home({dark, setDark}: {dark: boolean, setDark: React.Dispatch<SetStateAction<boolean>>}) {
    console.log(dark)
    return (
    <div className={'home__container'}>
        <h1>Eamonn's Brown Bag</h1>
        <p>How to make your website look slightly less shit</p>
        <button onClick={() => setDark(prev => !prev)}>{!dark ? 'Dark mode' : 'Light mode'}</button>
    </div>
    )
}