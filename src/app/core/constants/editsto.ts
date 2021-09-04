export const editSto = [
    {
        type: 'switch',
        id: 'openclose',
        checked: true,
        on: 'STO is Open',
        off: 'STO is Closed'
    },
    {
        type: 'switch',
        id: 'pause',
        checked: true,
        on: 'STO is Paused',
        off: 'STO not Paused'
    },
    {
        type: 'switch',
        id: 'issuable',
        checked: true,
        on: 'STO is Issuable',
        off: 'STO not Issuable'
    },
    {
        type: 'switch',
        id: 'cap',
        checked: true,
        on: 'Cap is Reached',
        off: 'Cap is not Reached'
    },
    {
        type: 'normal',
        label: 'Token Minted',
        placeholder: 'Tokens Minted Amount'
    },
    {
        type: 'normal',
        label: 'Tokens Sold',
        placeholder: 'Tokens Sold Amount'
    },
    {
        type: 'checkbox',
        kind: 'fundraised',
        label: 'Fund Raise Types',
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
    }
];