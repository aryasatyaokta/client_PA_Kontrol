import audio1 from '../audio/audio2struk21.mp3';
import audio2 from '../audio/audio2struk22.mp3';
import audio3 from '../audio/audio2struk23.mp3';
import audio4 from '../audio/audio2struk24.mp3';

export default [
    {
        id: 1,
        question: "'karang datang' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦫꦃꦢꦠꦃ',
            'ꦏꦫꦁꦢꦠꦤ꧀',
            'ꦏꦫꦁꦢꦠꦁ',
            'ꦏꦫꦁꦢꦠ'
        ],
        struktur: [
            'Tembung karang, aksara ka lan aksara ra diwenehi cecak "ng" dadi rang sawise iku dilanjut tembung datang, aksara da lan aksara ta diwenehi cecak "ng" dadi tang',
        ],
        audio: audio1
    },
    {
        id: 2,
        question: " 'pasar mawar' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦥꦱꦃꦩꦮꦃ',
            'ꦥꦱꦂꦩꦮꦩ꧀',
            'ꦥꦱꦁꦩꦮꦂ',
            'ꦥꦱꦂꦩꦮꦂ'
        ],
        struktur: [
            'Tembung pasar, aksara pa lan aksara sa diwenehi layar "r" dadi sar sawise iku dilanjut tembung mawar, aksara ma lan aksara wa diwenehi layar "r" dadi war',
        ],
        audio: audio2
    },
    {
        id: 3,
        question: " 'kathah gajah' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦛꦒꦗꦃ',
            'ꦏꦛꦂꦒꦗꦁ',
            'ꦏꦛꦃꦒꦗꦁ',
            'ꦏꦛꦃꦒꦗꦃ'
        ],
        struktur: [
            'Tembung kathah, aksara ka lan aksara tha diwenehi wignyan "h" dadi thah sawise iku dilanjut tembung gajah, aksara ga lan aksara ja diwenehi wignyan "h" dadi jah',
        ],
        audio: audio3
    },
    {
        id: 4,
        question: " 'raya jagat' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦫꦪꦃꦗꦒꦃ',
            'ꦫꦪꦁꦗꦒꦃ',
            'ꦫꦪꦗꦒꦠ꧀',
            'ꦫꦪꦁꦗꦒꦠ꧀'
        ],
        struktur: [
            'Tembung raya, aksara ra lan aksara ya sawise iku dilanjut tembung jagat, aksara ja, aksara ga, lan aksara ta diwenehi pangkon "mati" dadi, jagat',
        ],
        audio: audio4
    }
];

export const answerStruk5 = [2, 3, 3, 2];

// export const answerss = [2, 0, 0, 3, 1];
