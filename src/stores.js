import {writable} from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum tellus quis viverra tristique. Ut et eros eu leo rhoncus dignissim. Curabitur vitae porttitor neque. Suspendisse tellus arcu, hendrerit a dapibus in, efficitur et augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut mi eu arcu porta aliquet id at velit. Vestibulum venenatis sem id sollicitudin iaculis. Maecenas rutrum condimentum neque, eget molestie justo posuere ac. Etiam congue sem eget lacus fermentum, commodo pellentesque ligula fermentum. Sed rutrum quis mauris id placerat. Nullam venenatis metus lacus.'
    },
    {
        id: 2,
        rating: 9,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum tellus quis viverra tristique. Ut et eros eu leo rhoncus dignissim. Curabitur vitae porttitor neque. Suspendisse tellus arcu, hendrerit a dapibus in, efficitur et augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut mi eu arcu porta aliquet id at velit. Vestibulum venenatis sem id sollicitudin iaculis. Maecenas rutrum condimentum neque, eget molestie justo posuere ac. Etiam congue sem eget lacus fermentum, commodo pellentesque ligula fermentum. Sed rutrum quis mauris id placerat. Nullam venenatis metus lacus.'
    },
    {
        id: 3,
        rating: 8,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum tellus quis viverra tristique. Ut et eros eu leo rhoncus dignissim. Curabitur vitae porttitor neque. Suspendisse tellus arcu, hendrerit a dapibus in, efficitur et augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut mi eu arcu porta aliquet id at velit. Vestibulum venenatis sem id sollicitudin iaculis. Maecenas rutrum condimentum neque, eget molestie justo posuere ac. Etiam congue sem eget lacus fermentum, commodo pellentesque ligula fermentum. Sed rutrum quis mauris id placerat. Nullam venenatis metus lacus.'
    }
])
