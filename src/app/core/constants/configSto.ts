export const configInputs = [
    {
        type: 'both',
        label: 'Non-accredited Limit USD',
        prefix: '$',
        suffix: '.00',
        placeholder: 'Non-accredited Limit USD'
    },
    {
        type: 'both',
        label: 'Minimum investment USD',
        prefix: '$',
        suffix: '.00',
        placeholder: 'Minimum investment USD'
    },
    {
        type: 'checkbox',
        label: 'Fund-raise types',
        values: [
            {
                id: 'ethereum',
                label: 'Ethereum'
            },
            {
                id: 'usdt',
                label: 'USDT'
            },
            {
                id: 'usdc',
                label: 'USDC'
            },
            {
                id: 'dai',
                label: 'DAI'
            }
        ]
    },
    {
        type: 'normal',
        label: 'Fund wallet',
        placeholder: 'Fund Wallet Address',
        kind: 'text'
    },
    {
        type: 'normal',
        label: 'Treasury wallet',
        placeholder: 'Treasury wallet Address',
        kind: 'text'
    }
    // {
    //     type: 'checkbox',
        
    //     label: 'Stable Coins',
    //     values: [
    //         {
    //             id: 'usdt',
    //             label: 'USDT'
    //         },
    //         {
    //             id: 'usdc',
    //             label: 'USDC'
    //         },
    //         {
    //             id: 'dai',
    //             label: 'DAI'
    //         }
    //     ]
    // }
]