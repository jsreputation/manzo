import { faPaperPlane, faLightbulb, faGem } from '@fortawesome/free-solid-svg-icons';

export const actions = [
    {
      icon: faLightbulb,
      name: 'RAISE',
      description: 'Issuers are able to create a listing and start funding campaigns to raise investment capital from multiple investors.',
      background: 'bg-primary',
      route: 'newsto'
    },
    {
      icon: faGem,
      name: 'INVEST',
      description: 'Investors are able to browse investment opportunities and easily contact Issuers;  and securely participate in a funding round.',
      background: 'bg-info',
      route: 'invest'
    },
    {
      icon: faPaperPlane,
      name: 'MARKET',
      description: 'Companies listed on DPO may be promising start-up companies, to established revenue producing going concern businesses.',
      background: 'bg-warning',
      route: 'market'
    }
  ]