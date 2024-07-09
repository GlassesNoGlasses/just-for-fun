import { randomInt } from "crypto";

export interface ISIYChecklist {
    name: string;
    intoThem: number;
    eyeContact: boolean;
    flirty: boolean;
    dates: boolean;
    kissed: boolean;
    Netflixed: boolean;
    couple: boolean;
    fiances: boolean;
    married: boolean;
    kids: boolean;
}

export const ISIYChecklistResponses = (checklist: ISIYChecklist): string => {
    if (checklist.intoThem === 0) {
        const responseType = randomInt(1, 5);
        switch (responseType) {
            case 1:
                return "You're not into them. Why are you even here?";
            case 2:
                return "They could be into you though. You never know 🤷‍♂️.";
            case 3:
                return "People are scary. I get it.";
            case 4:
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

    if (checklist.flirty) {
        return "Sure she may seem flirty, but that could just be their personality. You can't really tell at this point.";
    }

    if (checklist.eyeContact) {
        return `While eye contact is a good sign, she could have just been looking at something behind or around you. 
        People's eyes do tend to naturally wander. Perhaps she was looking at that cute guy that builds website for fun. 
        You can't really tell.`;
    }


    return "You can't really tell."
}
