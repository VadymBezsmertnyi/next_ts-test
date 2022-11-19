import {
  TaggerSliderFirst,
  StationSliderFirst,
  Tagger2SliderFirst,
  NetronicSliderFirst,
  SmartSliderFirst,
  BlasterSecondSlider,
  EclipseSecondSlider,
  StationSecondSlider,
  SmartSecondSlider,
  MultiSecondSlider,
} from 'images';

export const INFO_DOWN_SLIDERS = [
  {
    id: 0,
    mainTitle: 'FALCON STANDART SET ',
    img: '/slider0.jpg',
    discount: 15,
    otherTitle:
      'Премиум тагеры с импульсной отдачей, цветным IPS дисплеем и прочным корпусом.',
    services: [
      { id: 0, Icon: TaggerSliderFirst, title: 'Тагер Falcon F1', pcs: 6 },
      { id: 1, Icon: StationSecondSlider, title: 'Станция Sirius', pcs: 6 },
      { id: 2, Icon: Tagger2SliderFirst, title: 'Тагер Falcon F2', pcs: 6 },
      { id: 3, Icon: NetronicSliderFirst, title: 'Повязка Netronic', pcs: 6 },
      {
        id: 4,
        Icon: SmartSecondSlider,
        title: 'Контрольная точка Smart',
        pcs: 6,
      },
    ],
  },
  {
    id: 1,
    mainTitle: 'GALAXY ECLIPSE SET ',
    img: '/slider1.jpg',
    discount: 20,
    otherTitle:
      'Безопасная игра, уникальные режимы и дизайн, побуждающий к действию.',
    services: [
      { id: 0, Icon: BlasterSecondSlider, title: 'Бластер Eclipse', pcs: 12 },
      { id: 1, Icon: EclipseSecondSlider, title: 'Жилет Eclipse', pcs: 12 },
      { id: 2, Icon: StationSecondSlider, title: 'Станция Sirius', pcs: 2 },
      {
        id: 3,
        Icon: SmartSecondSlider,
        title: 'Контрольная точка Smart',
        pcs: 1,
      },
      {
        id: 4,
        Icon: MultiSecondSlider,
        title: 'Мультистанция',
        pcs: 1,
      },
    ],
  },
];
