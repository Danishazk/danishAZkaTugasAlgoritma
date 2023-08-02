const waktu = [2, 2, 3, 3, 1, 4, 5]

const batasWaktu=2;

 let totalBermain = 0;
 let totalMelebihi = 0;

 for(i = 0; i<waktu.length; i++){
    totalBermain += waktu[i];

    if (waktu[i] > batasWaktu) {
        totalMelebihi++
    }
 }

 console.log("Total bermain :" + totalBermain, "jam");
 console.log(`Total melebihi batas :` + totalMelebihi, "jam");

