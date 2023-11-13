export default function HobbyLinks(){
    const hobbyLinks = ['netflix.com', 'sony.com'];
    return (
        <div>
        <a href={hobbyLinks[0]}>Netflix</a><br /> 
        <a href={hobbyLinks[1]}>Sony</a>
    </div>
    )
}