import { Guarantee } from './Guarantee';

const guaranteeDetails = [
  {
    img: '../assets/f-delivery.png',
    title: 'Free shipping',
    description:
      'Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.',
  },
  {
    img: '../assets/coin.png',
    title: '100% Money Back',
    description:
      'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.',
  },
  {
    img: '../assets/chat.png',
    title: 'Online Support 24/7',
    description:
      'Urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cursus.',
  },
];

export const instantiateGuarantee = guaranteeDetails.map((guarantee) => {
  return (
    <div>
      <Guarantee
        img={guarantee.img}
        alt={guarantee.alt}
        title={guarantee.title}
        description={guarantee.description}
      />
    </div>
  );
});
