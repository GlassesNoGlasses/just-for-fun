
export interface ISIYChecklist {
    name: string;
    intoThem: number; // 0 = not into them, 1 = into them, -1 = can't tell
    eyeContact: boolean;
    flirty: boolean;
    dates: boolean;
    kissed: boolean;
    Netflixed: boolean;
    couple: boolean;
    married: boolean;
    kids: boolean;
}

export const ISIYChecklistResponses = (checklist: ISIYChecklist): string => {
    if (checklist.intoThem === 0) {
        const responseType = Math.floor(Math.random() * 4);
        switch (responseType) {
            case 0:
                return "You're not even into them. Why are you here?";
            case 1:
                return "They could be into you though. You never know 🤷‍♂️.";
            case 2:
                return "People are scary. I get it.";
            case 3:
                return`Yeah... ${checklist.name} is probably not the one. They only just caught your attention 
                and made you waste your time on this checklist. Shame.`;
            default:
                return`Yeah... ${checklist.name} is probably not the one. They only just caught your attention 
                and made you waste your time on this checklist. Shame.`;
        }

    } else if (checklist.intoThem === -1) {
        return `Honestly, that's the secret. You can never tell if you're truly into someone; that's not how love works. It may 
        be something simple that draws you in: a smile, a laugh, a shared interest. But it's not always easy to tell if they're romantic 
        feelings, or just feelings of belonging and comfort. But if you do decide to take that leap of faith, don't be discouraged by imaginative consequences. 
        Sometimes that first step is hard. I get it. But it's not meant to be easy. If it was, everyone would be in love and happy. 
        But that's not how the world works. So, take a chance. You never know what might happen 😉.`;
    }

    if (checklist.kids) {
        return `While kids are definitely a sign of commitment, it's not a definitive answer. Maybe she was just being considerate 
        and didn't want you to be lonely. Or maybe she was worried about the declining birth rate and was being a good sumaritan. 
        Either way, it's still too early to tell.`;
    }

    if (checklist.married) {
        return `Despite a life-binding, government-facilitated contract sounding romantic, you still can't really tell if she's actually into you. 
        She might be secretly working for the IRA and found out your gambling addiction. Or she's just being a really good friend.`;
    }

    if (checklist.Netflixed) {
        return `Again, I wouldn't get my hopes up. While intimacy is a good sign, it's not everything. 
        Maybe she's Canadian and was just being polite.`
    }

    if (checklist.dates) {
        return `While going on dates is nice, so is a free meal. Even if you felt a connection, it's not a clear answer.
        Maybe she was practicing her conversational skills on you for a boy she really likes.`
    }

    if (checklist.flirty) {
        return `Honestly, you really can't tell. Flirting can be subjective, and guys don't have the greatest track record of picking up "hints". 
        Maybe she was just being nice and friendly.`;
    }

    if (checklist.eyeContact) {
        return `While eye contact is a good sign, it's not a definitive answer. People's eyes do tend to naturally wander, and 
        she could have just been looking at something behind or around you.`;
    }

    return "You can't really tell, ever."
}
