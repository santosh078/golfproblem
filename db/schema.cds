namespace golf;

using {managed} from '@sap/cds/common';

entity Rounds : managed {
    key ID    : UUID;
        title : String(111);
        holes : Composition of many Holes;

}

entity Holes {
    key ID    : UUID;
        title : String(111);
        score : Int32;
        par : Int32;
        shots : Composition of many Shots;
        round : Composition of one Rounds;
        result :String
}

entity Shots {
    key ID    : UUID;
        title : String(111);
        hole  : Composition of many Holes;
}
