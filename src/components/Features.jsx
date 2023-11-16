import growImg from '../assets/images/illustration-grow-together.svg'
import flowImg from '../assets/images/illustration-flowing-conversations.svg'
import yourImg from '../assets/images/illustration-your-users.svg'

export default function Features() {
    const featureContent = [
        {
            heading: 'Grow Together',
            paragraph: 'Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.',
            image: growImg
        },

        {
            heading: 'Flowing Conversations',
            paragraph: 'You wouldn\'t paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.',
            image: flowImg
        },
        {
            heading: 'Your Users',
            paragraph: 'It takes no time at all to integrate Huddle with your app\'s authentication solution. This means, once signed in to your app, your users can start chatting immediately.',
            image: yourImg
        }
    ]

    const featureElements = featureContent.map( (feature, i) => {
        return (
            <article key={i}>
                <h2>{feature.heading}</h2>
                <p>{feature.paragraph}</p>
                <img className="max-w-[410px]" src={feature.image} alt="" />
            </article>
        )
    })

    return (
        <section>
            <div className="container mx-auto">
                {featureElements}
            </div>
        </section>
    )
}
