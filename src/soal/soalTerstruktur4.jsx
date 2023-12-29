import audio1 from '../audio/audiostruk31.mp3';
import audio2 from '../audio/audiostruk32.mp3';
import audio3 from '../audio/audiostruk33.mp3';

export default [
    {
        id: 1,
        question: "'kremi' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦿꦱ',
            'ꦏꦾꦩꦶ',
            'ꦏꦿꦩꦶ',
            'ꦏꦽꦩꦶ'
        ],
        struktur: [
            'Aksara ka diwenehi keret "re" dadi kre lan aksara ma diwenehi wulu "i" dadi mi',
        ],
        audio: audio1
    },
    {
        id: 2,
        question: " 'kyai' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦏꦿꦲꦶ',
            'ꦏꦽꦲꦶ',
            'ꦏꦾꦲꦶ',
            'ꦥꦿꦲꦶ'
        ],
        struktur: [
            'Aksara ka diwenehi pengkal "ya" dadi kya lan aksara ha diwenehi wulu "i" dadi hi, hi -> i ',
        ],
        audio: audio2
    },
    {
        id: 3,
        question: " 'cakra' yen ditulis aksara Jawa yaiku ___",
        options: [
            'ꦕꦏꦽ',
            'ꦕꦏꦾ',
            'ꦕꦥꦿ',
            'ꦕꦏꦿ'
        ],
        struktur: [
            'Aksara ca lan aksara ka diwenehi cakra "ra" dadi kra ' ,
        ],
        audio: audio3
    },
];

export const answerStruk4 = [3, 2, 3];

// export const answerss = [2, 0, 0, 3, 1];
