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
            <article key={i} className="flex flex-wrap mb-10 pt-12 pb-9 px-10 rounded-2xl card-shadow text-center">
                <div className="order-2">
                    <h2 className="mb-5 text-cyan-975 text-xl">{feature.heading}</h2>
                    <p className="text-sm text-slate-450">{feature.paragraph}</p>
                </div>

                <img className="block mx-auto max-w-[240px] md:max-w-[410px] order-1 pb-12 md:pb-14" src={feature.image} alt="" />
            </article>
        )
    })

    return (
        <section className="px-5 pb-20 pt-[60px]">
            <div className="container mx-auto">
                {featureElements}
            </div>
        </section>
    )
}
