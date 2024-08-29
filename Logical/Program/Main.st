PROGRAM _INIT

END_PROGRAM

PROGRAM _CYCLIC
	AxisBasic(MpLink := ADR(gAxis_1), Enable := TRUE, Parameters := ADR(AxisParam));
END_PROGRAM

PROGRAM _EXIT
	AxisBasic(MpLink := ADR(gAxis_1), Enable := FALSE, Parameters := ADR(AxisParam));
END_PROGRAM

