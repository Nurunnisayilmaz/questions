function question3(oran, tutar, kod) {
    if (kod.length != oran.length || kod.length != tutar.length) {
        console.log("Girilen veriler eşit uzunlukta değildir.");
        return;
    }

    for (let i = 0; i < (kod.length); i++) {
        for (let j = i + 1; j < kod.length; j++) {
            if (kod[i] == kod[j] && oran[i] == oran[j]) {
                tutar[i] += tutar[j];
                kod.splice(j, 1)
                tutar.splice(j, 1)
                oran.splice(j, 1)
            }
        }
    }


    const result = [oran, tutar, kod];
    console.log("oran: " + result[0] + "\n" + "tutar: " + result[1] + "\n" + "kod: " + result[2]);
}

const oran = [0, 1, 8, 18, 18, 1];
const tutar = [10, 15, 12, 23, 30, 43];
const kod = ["0071", "0071", "0073", "0073", "0071", "0071"];

question3(oran, tutar, kod);

