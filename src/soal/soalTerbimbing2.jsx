import audio1 from '../audio/audio2bim1.mp3';
import audio2 from '../audio/audio2bim2.mp3';
import audio3 from '../audio/audio2bim3.mp3';
import audio4 from '../audio/audio2bim4.mp3';
import audio5 from '../audio/audio2bim5.mp3';

export default [
    {
        id: 1,
        question: " 'satya gigih' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦱꦠꦾꦒꦒꦃ',
            'ꦱꦠꦾꦒꦺꦴꦒꦺꦴꦃ',
            'ꦱꦠꦾꦒꦶꦒꦶꦃ',
            'ꦱꦠꦾꦒꦼꦒꦼꦃ'
        ],
        audio: audio1,
        struktur: [
            'Tembung satya, aksara sa lan aksara ta diwenehi pengkal "ya" dadi tya sawise iku dilanjut tembung gigih, loro aksara ga diwenehi wulu "i" dadi gi, nanging aksara ga sing terakhir diwenehi wignyan "h" dadi gih',
        ],
        a1: "ꦱ ",
        a2: "ꦠ ->_ ꦾ",
        a3: "ꦒ ->_ꦶ",
        a4: "ꦒ ->_ꦶ & _ꦃ"    
    },
    {
        id: 2,
        question: " 'rudi pilot' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦫꦸꦢꦶꦥꦺꦴꦭꦶꦱꦶ',
            'ꦫꦸꦢꦶꦏꦸꦫꦶꦂ',
            'ꦫꦸꦢꦶꦩꦱꦶꦤꦶꦱ꧀',
            'ꦫꦸꦢꦶꦥꦶꦭꦺꦴꦠ꧀'
        ],
        audio: audio2,
        struktur: [
            'Tembung rudi, aksara ra diwenehi suku "u" dadi ru lan aksara da diwenehi wulu "i" dadi di sawise iku dilanjut tembung pilot, aksara pa diwenehi wulu "i" dadi pi, aksara la diwenehi taling tarung "o" dadi lo, lan aksara ta mati diwenehi pangkon dadi, pilot',
        ],
        a1: "ꦫ -> _ ꦸ",
        a2: "ꦢ -> _ꦶ",
        a3: "ꦥ -> _ꦶ",
        a4: "ꦭ -> _ꦺꦴ",
        a5: "ꦠ ->_ ꧀"
    },
    {
        id: 3,
        question: " 'warna kretu' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦮꦁꦤꦏꦿꦼꦠꦸ',
            'ꦮꦂꦤꦏꦿꦠꦸ',
            'ꦮꦂꦤꦏꦾꦠꦶ',
            'ꦮꦂꦤꦏꦽꦠꦸ'
        ],
        audio: audio3,
        struktur: [
            'Tembung warna, aksara wa diwenehi layar "r" dadi war lan aksara na sawise iku dilanjut tembung kretu, aksara ka diwenehi keret "re" dadi kre lan aksara ta diwenehi suku "u" dadi tu',
        ],
        a1: "ꦮ ->_ꦂ",
        a2: "ꦤ",
        a3: "ꦏ ->_ ꦽ",
        a4: "ꦠ ->_ꦸ"
    },
    {
        id: 4,
        question: " 'putih koco' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦥꦸꦠꦶꦃꦏꦺꦫꦩꦶꦏ꧀',
            'ꦥꦸꦠꦶꦃꦏꦺꦴꦕꦺꦴ',
            'ꦲꦧꦁꦏꦺꦴꦕꦺꦴ',
            'ꦲꦧꦁꦏꦺꦫꦩꦶꦏ꧀'
        ],
        audio: audio4,
        struktur: [
            'Tembung putih, aksara pa diwenehi suku "u" dadi pu lan aksara ta diwenehi wulu "i" lan wignyan "h" dadi tih, sawise iku dilanjut tembung koco, aksara ka diwenehi taling tarung "o" dadi ko, lan aksara ca diwenehi taling tarung "o" dadi co',
        ],
        a1: "ꦥ ->_ ꦸ",
        a2: "ꦕ ->_ ꦶ &  _ ꦃ",
        a3: "ꦏ -> _ꦺꦴ ",
        a4: "ꦕ -> _ꦺꦴ"
    },
    {
        id: 5,
        question: "`kroso luwe` yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦿꦺꦴꦱꦺꦴꦭꦸꦮꦺ',
            'ꦏꦿꦱꦭꦸꦮꦺ',
            'ꦏꦿꦱꦭꦸꦮꦼ',
            'ꦫꦱꦭꦸꦮꦺ'
        ],
        audio: audio5,
        struktur: [
            'Tembung kroso, aksara ka diwenehi cakra "ra" dadi kra nanging ben dadi kro diwenehi taling tarung "o" lan aksara sa diwenehi taling tarung "o" dadi so sawise iku dilanjut tembung luwe, aksara la diwenehi suku u dadi lu lan aksara wa diwenehi taling "é" dadi we ',
        ],
        a1: "ꦏ -> _ꦿ & _ꦺꦴ ",
        a2: "ꦱ ->_ꦺꦴ",
        a3: "ꦭ ->_ ꦸ",
        a4: "ꦮ ->_ꦺ "
    }
];

export const answerBim2 = [2, 3, 3, 1, 0];

// export const answerss = [2, 0, 0, 3, 1];
