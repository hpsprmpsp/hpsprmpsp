function getBN(ip){
	var ipAd = ip.split("/")[0];
	var msk = parseInt(ip.split("/")[1],10);
	var maskOnBitUsed = [0,128,192,224,240,248,252,254,255];
	var sub = [];
	var availableBits = 0;

	var mskBit = msk % 8;
	var subRes = Math.floor(msk / 8 );
	for(i = 0; i<subRes; i++){
		sub.push(maskOnBitUsed[8]);
		
	}
	sub.push(maskOnBitUsed[mskBit]);
	for(i=0;i<(4-(subRes+1));i++){
		sub.push(maskOnBitUsed[0]);
	}

	
	
}