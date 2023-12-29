import audio1 from '../audio/audio2struk11.mp3';
import audio2 from '../audio/audio2struk12.mp3';
import audio3 from '../audio/audio2struk13.mp3';
import audio4 from '../audio/audio2struk14.mp3';
import audio5 from '../audio/audio2struk15.mp3';

export default [
    {
        id: 1,
        question: " 'sawi wingi' yen ditulis aksara Jawa yaiku ___ ",
        options: [
            'ꦱꦮꦺꦮꦶꦔꦺ',
            'ꦱꦮꦼꦮꦶꦔꦶ',
            'ꦱꦮꦶꦮꦶꦔꦶ',
            'ꦱꦮꦺꦴꦮꦶꦔꦺꦴ'
        ],
        struktur: [
            'Tembung sawi, aksara sa lan aksara wa diwenehi wulu "i" dadi wi sawise iku dilanjut tembung wingi, aksara wa diwenehi wulu "i" dadi wi lan aksara nga diwenehi wulu "i" dadi ngi',
        ],
        audio: audio1
    },
    {
        id: 2,
        question: " 'nyapu pura' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦚꦥꦸꦥꦸꦫ',
            'ꦚꦥꦶꦥꦶꦫ',
            'ꦚꦥꦸꦥꦫ',
            'ꦚꦥꦺꦥꦼꦫ'
        ],
        struktur: [
            'Tembung nyapu, aksara nya lan aksara pa diwenehi suku "u" dadi pu sawise iku dilanjut tembung pura, aksara pa diwenehi suku "u" dadi pu lan aksara ra',
        ],
        audio: audio2
    },
    {
        id: 3,
        question: " 'tape pare' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦠꦥꦶꦥꦫꦺ',
            'ꦠꦥꦺꦥꦫꦶ',
            'ꦠꦥꦼꦥꦫꦼ',
            'ꦠꦥꦺꦥꦫꦺ'
        ],
        struktur: [
            'Tembung tape, aksara ta lan aksara pa diwenehi taling "é" dadi pe sawise iku dilanjut tembung pare, aksara pa lan aksara ra diwenehi taling "é" dadi re'
        ],
        audio: audio3
    },
    {
        id: 4,
        question: " 'dhona moco' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦣꦺꦴꦤꦩꦕ',
            'ꦣꦤꦩꦺꦴꦕꦺꦴ',
            'ꦣꦶꦤꦩꦺꦴꦕꦶ',
            'ꦣꦺꦴꦤꦩꦺꦴꦕꦺꦴ'
        ],
        struktur: [
            'Tembung dhona, aksara dha diwenehi taling tarung "o" dadi dho lan aksara na sawise iku dilanjut tembung moco, aksara ma diwenehi taling tarung "o" dadi mo lan aksara ca diwenehi taling tarung "o" dadi co',
        ],
        audio: audio4
    },
    {
        id: 5,
        question: " 'sega teka' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦱꦼꦒꦠꦼꦏꦶ',
            'ꦱꦼꦒꦠꦼꦏ',
            'ꦱꦼꦒꦶꦠꦏꦶ',
            'ꦱꦼꦒꦺꦴꦠꦺꦏꦺꦴ'
        ],
        struktur: [
            'Tembung sega, aksara sa diwenehi pepet "e" dadi se lan aksara ga sawise iku dilanjut tembung teka, aksara ta diwenehi pepet "e" dadi te lan aksara ga'
        ],
        audio: audio5
    },
];

export const answerStruk2 = [2, 0, 3, 3, 1];
