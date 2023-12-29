import audio1 from '../audio/audiostruk11.mp3';
import audio2 from '../audio/audiostruk12.mp3';
import audio3 from '../audio/audiostruk13.mp3';
import audio4 from '../audio/audiostruk14.mp3';
import audio5 from '../audio/audiostruk15.mp3';

export default [
    {
        id: 1,
        question: " 'sawi' yen ditulis aksara Jawa yaiku ___ ",
        options: [
            'ꦱꦮꦺ',
            'ꦱꦮꦼ',
            'ꦱꦮꦶ',
            'ꦱꦮꦺꦴ'
        ],
        struktur: [
            'Aksara sa lan aksara wa diwenehi wulu "i" dadi wi',
        ],
        audio: audio1
    },
    {
        id: 2,
        question: " 'nyapu' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦚꦥꦸ',
            'ꦥꦸꦚ',
            'ꦚꦥꦶ',
            'ꦚꦥꦺ'
        ],
        struktur: [
            'aksara nya lan aksara pa diwenehi suku "u" dadi pu',
        ],
        audio: audio2
    },
    {
        id: 3,
        question: " 'tape' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦠꦥꦼ',
            'ꦠꦥꦸ',
            'ꦠꦥꦺꦴ',
            'ꦠꦥꦺ'
        ],
        struktur: [
            'aksara ta lan aksara pa diwenehi taling "é" dadi pe'
        ],
        audio: audio3
    },
    {
        id: 4,
        question: " 'dhona' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦣꦼꦤ',
            'ꦝꦶꦤ',
            'ꦣꦺꦴꦤꦺꦴ',
            'ꦣꦺꦴꦤ'
        ],
        struktur: [
            'aksara dha diwenehi taling tarung "o" dadi dho lan aksara na',
        ],
        audio: audio4
    },
    {
        id: 5,
        question: " 'teka' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦠꦏꦺꦴ',
            'ꦠꦼꦏ',
            'ꦠꦺꦏ',
            'ꦠꦸꦏ'
        ],
        struktur: [
            'aksara ta diwenehi pepet "e" dadi te lan aksara ka'
        ],
        audio: audio5
    },
];

export const answerStruk = [2, 0, 3, 3, 1];
