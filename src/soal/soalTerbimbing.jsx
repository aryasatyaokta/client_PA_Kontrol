import audio1 from '../audio/audiobim1.mp3';
import audio2 from '../audio/audiobim2.mp3';
import audio3 from '../audio/audiobim3.mp3';
import audio4 from '../audio/audiobim4.mp3';
import audio5 from '../audio/audiobim5.mp3';

export default [
    {
        id: 1,
        question: " 'surti' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦱꦸꦠꦶꦃ',
            'ꦱꦸꦂꦠꦶ',
            'ꦱꦺꦴꦂꦠꦶ',
            'ꦱꦼꦠꦁ'
        ],
        audio: audio1,
        struktur: [
            'Aksara sa diwenehi suku "u" lan layar "r" dadi sur lan aksara ta diwenehi wulu "i" dadi ti',
        ],
        a1: "ꦱ ->_  ꦸ & _ ꦂ ",
        a2: "ꦠ ->_  ꦶ"        
    },
    {
        id: 2,
        question: " 'korek' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦺꦴꦫꦺꦏ꧀',
            'ꦏꦺꦴꦫꦼꦏ꧀',
            'ꦏꦺꦫꦺꦏ꧀',
            'ꦏꦸꦫꦶꦏ꧀'
        ],
        audio: audio2,
        struktur: [
            'Aksara ka diwenehi taling tarung "o" dadi ko, aksara ra diwenehi taling "é" dadi re, lan aksara ka diwenehi pangkon mati dadi korek',
        ],
        a1: "ꦏ ->_ꦺꦴ",
        a2: "ꦫ -> _ꦺ",
        a3: "ꦏ ->_ ꧀ "
    },
    {
        id: 3,
        question: " 'sregep' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦱꦿꦒꦺꦥ꧀',
            'ꦱꦒꦺꦢ꧀',
            'ꦱꦽꦒꦼꦥ꧀',
            'ꦱꦿꦒꦺꦥ꧀'
        ],
        audio: audio3,
        struktur: [
            'Aksara sa diwenehi keret "re" dadi sre, aksara ga diwenehi pepet "e" dadi ge, lan aksara pa diwenehi pangkon mati dadi sregep  ',
        ],
        a1: "ꦱ ->_ ꦽ",
        a2: "ꦒ ->_ ꦼ",
        a3: "ꦥ ->_ ꧀"
    },
    {
        id: 4,
        question: " 'ngracah' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦔꦽꦕꦃ',
            'ꦔꦫꦁ',
            'ꦔꦿꦕꦃ',
            'ꦛꦿꦕꦃ'
        ],
        audio: audio4,
        struktur: [
            'Aksara nga diwenehi cakra "ra" dadi ngra lan aksara ca diwenehi wignyan "h" dadi cah',
        ],
        a1: "ꦔ ->_ ꦿ",
        a2: "ꦕ ->_ ꦃ" 
    },
    {
        id: 5,
        question: " 'kopyah' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦺꦴꦥꦿꦃ',
            'ꦥꦺꦴꦏꦾꦃ',
            'ꦏꦺꦴꦥꦒ꧀',
            'ꦏꦺꦴꦥꦾꦃ'
        ],
        audio: audio5,
        struktur: [
            'Aksara ka diwenehi taling tarung "o" dadi ko lan aksara pa diwenehi pengkal "ya" dadi pya sawise iku diwenehi wignyan "h" dadi pyah',
        ],
        a1: "ꦏ ->_ꦺꦴ",
        a2: "ꦥ ->_ ꦾ & _ꦃ"
    }
];

export const answerBim = [1, 0, 2, 2, 3];

// export const answerss = [2, 0, 0, 3, 1];
