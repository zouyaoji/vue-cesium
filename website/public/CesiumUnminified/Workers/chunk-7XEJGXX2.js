/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.135.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import {
  TerrainProvider_default
} from "./chunk-34YXP222.js";
import {
  EllipsoidalOccluder_default,
  TerrainEncoding_default
} from "./chunk-P2H75UV5.js";
import {
  WebMercatorProjection_default
} from "./chunk-LWJXCI3F.js";
import {
  OrientedBoundingBox_default
} from "./chunk-KGLDJRSO.js";
import {
  AttributeCompression_default
} from "./chunk-6HBKE43B.js";
import {
  AxisAlignedBoundingBox_default
} from "./chunk-NGKF5NTR.js";
import {
  BoundingSphere_default
} from "./chunk-MXHRZHDF.js";
import {
  Matrix4_default,
  Rectangle_default,
  Transforms_default,
  binarySearch_default
} from "./chunk-3GL53OCU.js";
import {
  ComponentDatatype_default
} from "./chunk-EZ7NJXQN.js";
import {
  Cartesian2_default,
  Cartesian3_default,
  Cartographic_default,
  Ellipsoid_default,
  Frozen_default,
  Matrix3_default
} from "./chunk-RQRODXVN.js";
import {
  Math_default
} from "./chunk-OE22564R.js";
import {
  Check_default
} from "./chunk-W4PIP5PG.js";

// node_modules/meshoptimizer/meshopt_encoder.module.js
var MeshoptEncoder = (function() {
  var wasm = "b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuec;G:Qdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq;i28Adbk:Bhdhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;C:kjjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8AarcUf9cb83ibarc8Wf9cb83ibarcyf9cb83ibarcaf9cb83ibarcKf9cb83ibarczf9cb83ibar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzarc;qofcKfhHarc;qofczfhOcbhAincdhCcbhodnavci6mbaH9cb83ibaO9cb83ibar9cb83i;yoar9cb83i;qoadaAfgoybbhXcbhQincbhwcbhLdninaoalfhKaoybbgYaX7aLVhLawcP0meaKhoaYhXawcefgwaQfai6mbkkcbhXarc;qofhwincwh8AcwhEdnaLaX93gocFeGg3cs0mbclhEa3ci0mba3cb9hcethEkdnaocw4cFeGg3cs0mbclh8Aa3ci0mba3cb9hceth8Aka8AaEfh3awydbh5cwh8AcwhEdnaocz4cFeGg8Ecs0mbclhEa8Eci0mba8Ecb9hcethEka3a5fh3dnaocFFFFb0mbclh8AaocFFF8F0mbaocFFFr0ceth8Akawa3aEfa8AfBdbawclfhwaXcefgXcw9hmbkaKhoaYhXaQczfgQai6mbkcbhocehwazhLinawaoaLydbarc;qofaocdtfydb6EhoaLclfhLawcefgwcw9hmbkcihCkcbh3arc;qlfcbcjdz:xjjjb8Aarc;alfcwfcbBdbar9cb83i;alaoclth8Fadhaaqhhakh5inarc;qlfadcba3cufgoaoa30Eal2falz:wjjjb8Aaiahaiah6Ehgdnaqaia39Ra3aqfai6EgYcsfc9WGgoaY9nmbarc;qofaYfcbaoaY9Rz:xjjjb8Akada3al2fh8Jcbh8Kina8Ka8FVcl4hQarc;alfa8Kcdtfh8LaAh8Mcbh8Nina8NaAfhwdndndndndndna8KPldebidkasa8Mc98GgLfhoa5aLfh8Aarc;qlfawc98GgLfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkaYTmla8Ncith8Ea8JaLfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aQ93a8E486bba8Aalfh8AaEalfhEaLhXaKcefgKaY9hmbxlkkaYTmia8Mc9:Ghoa8NcitcwGhEarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhLarc;qofhwaghXinawa5aofRbbcwtaaaofRbbVg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbaoalfhoawcefhwa8AhLa3aXcufgX9hmbxikkaYTmda8Jawfhoarc;qlfawfRbbhLarc;qofhwaghXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLa3aXcufgX9hmbxdkkaYTmeka8LydbhEcbhKarc;qofhoincdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egwa8Aawa8A6Egwczawcz6EaEfhEaoczfhoaKczfgKaY6mbka8LaEBdbka8Mcefh8Ma8Ncefg8Ncl9hmbka8Kcefg8KaC9hmbkaaamfhaahaxfhha5amfh5a3axfg3ai6mbkcbhocehwaPhLinawaoaLydbarc;alfaocdtfydb6EhoaLclfhLawcefgXhwaCaX9hmbkaraAcd4fa8FcdVaoaocdSE86bbaAclfgAal6mbkkabaefh8Kabcefhoalcd4gecbaDEhkadcefhOarc;abfceVhHcbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aa8Kao9Rak6mdadamal2gwfhxcbh8JaOawfhzaocbakz:xjjjbghakfh5aqaiam9Ramaqfai6Egscsfgocl4cifcd4hCaoc9WGg8LThPindndndndndndndndndndnaDTmbara8Jcd4fRbbgLciGPlbedlbkasTmdaxa8Jfhoarc;abfa8JfRbbhLarc;qofhwashXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLaXcufgXmbxikkasTmia8JcitcwGhEarc;abfa8JceVfRbbcwtarc;abfa8Jc9:GgofRbbVhLaxaofhoarc;qofhwashXinawao8Vbbg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbawcefhwaoalfhoa8AhLaXcufgXmbxdkkaHa8Jc98GgEfhoazaEfh8Aarc;abfaEfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkasTmbaLcl4hYa8JcitcKGh3axaEfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aY93a3486bba8Aalfh8AaEalfhEaLhXaKcefgKas9hmbkkaDmbcbhoxlka8LTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8L9pmdxbkkdnavmbcehoxikcbhEaChKaChYinarc;qofaEfgocwf8Pibhyao8Pibh8PcdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egoa8Aaoa8A6Egoczaocz6EaYfhYaocucbaya8P:e9cb9sEgwaoaw6EaKfhKaEczfgEa8L9pmdxbkkaha8Jcd4fgoaoRbbcda8JcetcoGtV86bbxikdnaKas6mbaYas6mbaha8Jcd4fgoaoRbbcia8JcetcoGtV86bba8Ka59Ras6mra5arc;qofasz:wjjjbasfh5xikaKaY9phokaha8Jcd4fgwawRbbaoa8JcetcoGtV86bbka8Ka59RaC6mla5cbaCz:xjjjbgAaCfhYdndna8LmbaPhoxekdna8KaY9RcK9pmbaPhoxekaocdtc:q1jjbfcj1jjbaDEg5ydxggcetc;:FFFeGh8Fcuh3cuagtcu7cFeGhacbh8Marc;qofhLinarc;qofa8MfhQczhEdndndnagPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhExekcbhoa8FhEinaEaaaLaofRbb9nfhEaocefgocz9hmbkkcih8Ecbh8Ainczhwdndndna5a8AcdtfydbgKPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhwxekaKcetc;:FFFeGhwcuaKtcu7cFeGhXcbhoinawaXaLaofRbb9nfhwaocefgocz9hmbkkdndnawaE6mbaKa39hmeawaE9hmea5a8EcdtfydbcwSmeka8Ah8EawhEka8Acefg8Aci9hmbkaAa8Mco4fgoaoRbba8Ea8Mci4coGtV86bbdndndna5a8Ecdtfydbg3PDdbbbbbbbebkdncwa39Tg8ETmbcua3tcu7hwdndna3ceSmbcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXa3tVhXaocefhoa8Acufg8AmbkaYaX86bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbxdkkcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXcetVhXaocefhoa8Acufg8AmbkaYaX:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbkkcbhoinaYaLaofRbbgX86bbaYaXawcFeG9pfhYaocefgocz9hmbxikkdna3ceSmbinaYcb86bbaYcefhYxbkkinaYcb86bbaYcefhYxbkkaYaQ8Pbb83bbaYcwfaQcwf8Pbb83bbaYczfhYka8Mczfg8Ma8L9pgomeaLczfhLa8KaY9RcK9pmbkkaoTmlaYh5aYTmlka8Jcefg8Jal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma5hoa5mbkcbhwxdkdna8Kao9RakalfgwcKcaaDEgLawaL0EgX9pmbcbhwxdkdnawaL9pmbaocbaXaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoaraez:wjjjbaefhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;C:kjjbz:bjjjbk9reduaecd4gdaefgicaaica0Eabcj;abae9Uc;WFbGcjdaeca0Egifcufai9Uae2aiadfaicl4cifcd4f2fcefkmbcbabBd;C:kjjbk:Ese5u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd;m:kjjbgrc;GeV86bbalc;abfcFecjez:xjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgLydbhKaLcwfydbhYaLclfydbh8AcbhEdndndninalc;abfavcsGcitfgoydlh3dndndnaoydbgoaK9hmba3a8ASmekdnaoa8A9hmba3aY9hmbaEcefhExekaoaY9hmea3aK9hmeaEcdfhEkaEc870mdaXcufhvaLaEciGcx2goc;i1jjbfydbcdtfydbh3aLaoc;e1jjbfydbcdtfydbh8AaLaoc;a1jjbfydbcdtfydbhKcbhodnindnalavcsGcdtfydba39hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaOa3aOSgvaYce9iaYaH9oVgoGfhOdndndncbcsavEaYaoEgvcs9hmbarce9imba3a3aAa3cefaASgvEgAcefSmecmcsavEhvkasavaEcdtc;WeGV86bbavcs9hmea3aA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbka3hAxvkcPhvasaEcdtcPV86bba3hAkavTmiavaH9omicdhocehEaQhYxlkavcufhvaEclfgEc;ab9hmbkkdnaLceaYaOSceta8AaOSEcx2gvc;a1jjbfydbcdtfydbgKTaLavc;e1jjbfydbcdtfydbg8AceSGaLavc;i1jjbfydbcdtfydbg3cdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhYxdkcuhYaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydba39hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaKaOSg8EfhLdndnaYcm0mbaYcefhYxekcbcsa8AaLSgvEhYaLavfhLkdndnaEcm0mbaEcefhExekcbcsa3aLSgvEhEaLavfhLkc9:cua8EEh8FcbhvaEaYcltVgacFeGhodndndninavc:W1jjbfRbbaoSmeavcefgvcz9hmbxdkka5aKaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeaa86bbaecefhekdna8EmbaKaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaKhAkdnaYcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmba3aA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka3hAkalaXcdtfaKBdbaXcefcsGhvdndnaYPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfa3BdbavcefcsGhvkcihoalc;abfaQcitfgEaKBdlaEa8ABdbaQcefcsGhYcdhEavhXaLhOxekcdhoalaXcdtfa3BdbcehEaXcefcsGhXaQhYkalc;abfaYcitfgva8ABdlava3Bdbalc;abfaQaEfcsGcitfgva3BdlavaKBdbascefhsaQaofcsGhQaCcifgCai6mbkkdnaeaP9nmbcbhvxekcbhvinaeavfavc:W1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:kjjbk:Adewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb;m:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkdnaoar9nmbcbskaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:bvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhrdndnakJbbbb9GTmbaxhqxekJbbjZar:l:tgqaq:maxJbbbb9GEhqJbbjZax:l:tgxax:marJbbbb9GEhrkdndnalcxfIdbgxJbbj:;axJbbj:;9GEgkJbbjZakJbbjZ9FEavNJbbbZJbbb:;axJbbbb9GEMgx:lJbbb9p9DTmbax:Ohmxekcjjjj94hmkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEaoNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;3viDue99eu8Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6meaohwarhDinawc:CuBdbawclfhwaDcufgDmbkaeTmiadcl6mdarcdthqalhkcbhxinaohwakhDarhminawawydbgPcbaDIdbgs:8cL4cFeGc:cufasJbbbb9BEgzaPaz9kEBdbaDclfhDawclfhwamcufgmmbkakaqfhkaxcefgxaeSmixbkkaeTmdxekaeTmekarcdthkavce9hhqadcl6hdcbhxindndndnaqmbadmdc:CuhDalhwarhminaDcbawIdbgs:8cL4cFeGc:cufasJbbbb9BEgPaDaP9kEhDawclfhwamcufgmmbxdkkc:CuhDdndnavPleddbdkadmdaohwalhmarhPinawcbamIdbgs:8cL4cFeGgzc;:bazc;:b0Ec:cufasJbbbb9BEBdbamclfhmawclfhwaPcufgPmbxdkkadmecbhwarhminaoawfcbalawfIdbgs:8cL4cFeGgPc8AaPc8A0Ec:cufasJbbbb9BEBdbawclfhwamcufgmmbkkadmbcbhwarhPinaDhmdnavceSmbaoawfydbhmkdndnalawfIdbgscjjj;8iamai9RcefgmcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:Ohzxekcjjjj94hzkabawfazcFFFrGamcKtVBdbawclfhwaPcufgPmbkkabakfhbalakfhlaxcefgxae9hmbkkaocjdf8Kjjjjbk:Ylvdud99due99iudnaeTmbceaicufgvthocuaitcu7:Zhrcuavtcu7:Zhwcbhvadcl9hhDcbhqindndnalcwfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikdndnalIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9TgxaifhidndnalclfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEawNJbbbZMgk:lJbbb9p9DTmbak:Ohmxekcjjjj94hmkadaifhiaoamVhmdndnaDmbabavfgPai86bbaPcifam86bbaPcdfad86bbaPcefax86bbxekabaqfgPai87ebaPcofam87ebaPclfad87ebaPcdfax87ebkalczfhlavclfhvaqcwfhqaecufgembkkk;YqdXui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AcbhodnadTmbcbhoaiTmbdndnabaeSmbaehrxekavcuadcdtgwadcFFFFi0Ecbyd;q:kjjbHjjjjbbgrBd:SeavceBd:mdaraeawz:wjjjb8Akavc:GefcwfcbBdbav9cb83i:Geavc:Gefaradaiavc:Sefz:pjjjbavyd:GehDadci9Ugqcbyd;q:kjjbHjjjjbbheavc:Sefavyd:mdgkcdtfaeBdbavakcefgwBd:mdaecbaqz:xjjjbhxavc:SefawcdtfcuaicdtaicFFFFi0Ecbyd;q:kjjbHjjjjbbgmBdbavakcdfgPBd:mdalc;ebfhsaDheamhwinawalIdbasaeydbgzcwazcw6EcdtfIdbMUdbaeclfheawclfhwaicufgimbkavc:SefaPcdtfcuaqcdtadcFFFF970Ecbyd;q:kjjbHjjjjbbgPBdbdnadci6mbarheaPhwaqhiinawamaeydbcdtfIdbamaeclfydbcdtfIdbMamaecwfydbcdtfIdbMUdbaecxfheawclfhwaicufgimbkkakcifhoalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhzcbhwcbhXcehQinaehLcihkarawci2gKcdtfgeydbhsaeclfydbhdabaXcx2fgicwfaecwfydbgYBdbaiclfadBdbaiasBdbaxawfce86bbaOaYBdwaOadBdlaOasBdbaPawcdtfcbBdbdnazTmbcihkaLhiinaOakcdtfaiydbgeBdbakaeaY9haeas9haead9hGGfhkaiclfhiazcufgzmbkkaXcefhXcbhzinaCaAarazaKfcdtfydbcdtgifydbcdtfgYheaDaifgdydbgshidnasTmbdninaeydbawSmeaeclfheaicufgiTmdxbkkaeaYascdtfc98fydbBdbadadydbcufBdbkazcefgzci9hmbkdndnakTmbcuhwJbbbbh8Acbhdavyd:KehYavyd:OehKindndnaDaOadcdtfydbcdtgzfydbgembadcefhdxekadcs0hiamazfgsIdbhEasalcbadcefgdaiEcdtfIdbaHaecwaecw6EcdtfIdbMg3Udba3aE:th3aecdthiaKaYazfydbcdtfheinaPaeydbgzcdtfgsa3asIdbMgEUdbaEa8Aa8AaE9DgsEh8AazawasEhwaeclfheaic98fgimbkkadak9hmbkawcu9hmekaQaq9pmdindnaxaQfRbbmbaQhwxdkaqaQcefgQ9hmbxikkakczakcz6EhzaOheaLhOawcu9hmbkkaocdtavc:Seffc98fhedninaoTmeaeydbcbyd;u:kjjbH:bjjjbbaec98fheaocufhoxbkkavc:qdf8Kjjjjbk;IlevucuaicdtgvaicFFFFi0Egocbyd;q:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8Aadci9UhDdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic;K1jjbz:ojjjbkQbabaeadaic;m:jjjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:Vvioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:kjjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:kjjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkclhvdninavc98Smealcxfavfydbcbyd;u:kjjbH:bjjjbbavc98fhvxbkkalc;Waf8Kjjjjbk:Jwliuo99iud9:cbhv8Jjjjjbca9Rgoczfcwfcbyd:8:kjjbBdbaocb8Pd:0:kjjb83izaocwfcbyd;i:kjjbBdbaocb8Pd;a:kjjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:kjjbgeabcifc98GfgbBd;y:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:kjjbgeabcrfc94GfgbBd;y:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;y:kjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;y:kjjbfgdBd;y:kjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk;Qddbcjwk;mdbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;mqkzebbbebbbdbbb9G:vbb";
  var wasmpack = new Uint8Array([
    32,
    0,
    65,
    2,
    1,
    106,
    34,
    33,
    3,
    128,
    11,
    4,
    13,
    64,
    6,
    253,
    10,
    7,
    15,
    116,
    127,
    5,
    8,
    12,
    40,
    16,
    19,
    54,
    20,
    9,
    27,
    255,
    113,
    17,
    42,
    67,
    24,
    23,
    146,
    148,
    18,
    14,
    22,
    45,
    70,
    69,
    56,
    114,
    101,
    21,
    25,
    63,
    75,
    136,
    108,
    28,
    118,
    29,
    73,
    115
  ]);
  if (typeof WebAssembly !== "object") {
    return {
      supported: false
    };
  }
  var instance;
  var ready = WebAssembly.instantiate(unpack(wasm), {}).then(function(result) {
    instance = result.instance;
    instance.exports.__wasm_call_ctors();
    instance.exports.meshopt_encodeVertexVersion(0);
    instance.exports.meshopt_encodeIndexVersion(1);
  });
  function unpack(data) {
    var result = new Uint8Array(data.length);
    for (var i = 0; i < data.length; ++i) {
      var ch = data.charCodeAt(i);
      result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
    }
    var write = 0;
    for (var i = 0; i < data.length; ++i) {
      result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
    }
    return result.buffer.slice(0, write);
  }
  function assert(cond) {
    if (!cond) {
      throw new Error("Assertion failed");
    }
  }
  function bytes(view) {
    return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
  }
  function reorder(fun, indices, vertices, optf) {
    var sbrk = instance.exports.sbrk;
    var ip = sbrk(indices.length * 4);
    var rp = sbrk(vertices * 4);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    var indices8 = bytes(indices);
    heap.set(indices8, ip);
    if (optf) {
      optf(ip, ip, indices.length, vertices);
    }
    var unique = fun(rp, ip, indices.length, vertices);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var remap = new Uint32Array(vertices);
    new Uint8Array(remap.buffer).set(heap.subarray(rp, rp + vertices * 4));
    indices8.set(heap.subarray(ip, ip + indices.length * 4));
    sbrk(ip - sbrk(0));
    for (var i = 0; i < indices.length; ++i) indices[i] = remap[indices[i]];
    return [remap, unique];
  }
  function spatialsort(fun, positions, count, stride) {
    var sbrk = instance.exports.sbrk;
    var ip = sbrk(count * 4);
    var sp = sbrk(count * stride);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(positions), sp);
    fun(ip, sp, count, stride);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var remap = new Uint32Array(count);
    new Uint8Array(remap.buffer).set(heap.subarray(ip, ip + count * 4));
    sbrk(ip - sbrk(0));
    return remap;
  }
  function encode(fun, bound, source, count, size, level, version) {
    var sbrk = instance.exports.sbrk;
    var tp = sbrk(bound);
    var sp = sbrk(count * size);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(source), sp);
    var res = fun(tp, bound, sp, count, size, level, version);
    var target = new Uint8Array(res);
    target.set(heap.subarray(tp, tp + res));
    sbrk(tp - sbrk(0));
    return target;
  }
  function maxindex(source) {
    var result = 0;
    for (var i = 0; i < source.length; ++i) {
      var index = source[i];
      result = result < index ? index : result;
    }
    return result;
  }
  function index32(source, size) {
    assert(size == 2 || size == 4);
    if (size == 4) {
      return new Uint32Array(source.buffer, source.byteOffset, source.byteLength / 4);
    } else {
      var view = new Uint16Array(source.buffer, source.byteOffset, source.byteLength / 2);
      return new Uint32Array(view);
    }
  }
  function filter(fun, source, count, stride, bits, insize, mode) {
    var sbrk = instance.exports.sbrk;
    var tp = sbrk(count * stride);
    var sp = sbrk(count * insize);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(source), sp);
    fun(tp, count, stride, bits, sp, mode);
    var target = new Uint8Array(count * stride);
    target.set(heap.subarray(tp, tp + count * stride));
    sbrk(tp - sbrk(0));
    return target;
  }
  return {
    ready,
    supported: true,
    reorderMesh: function(indices, triangles, optsize) {
      var optf = triangles ? optsize ? instance.exports.meshopt_optimizeVertexCacheStrip : instance.exports.meshopt_optimizeVertexCache : void 0;
      return reorder(instance.exports.meshopt_optimizeVertexFetchRemap, indices, maxindex(indices) + 1, optf);
    },
    reorderPoints: function(positions, positions_stride) {
      assert(positions instanceof Float32Array);
      assert(positions.length % positions_stride == 0);
      assert(positions_stride >= 3);
      return spatialsort(instance.exports.meshopt_spatialSortRemap, positions, positions.length / positions_stride, positions_stride * 4);
    },
    encodeVertexBuffer: function(source, count, size) {
      assert(size > 0 && size <= 256);
      assert(size % 4 == 0);
      var bound = instance.exports.meshopt_encodeVertexBufferBound(count, size);
      return encode(instance.exports.meshopt_encodeVertexBuffer, bound, source, count, size);
    },
    encodeVertexBufferLevel: function(source, count, size, level, version) {
      assert(size > 0 && size <= 256);
      assert(size % 4 == 0);
      assert(level >= 0 && level <= 3);
      assert(version === void 0 || version == 0 || version == 1);
      var bound = instance.exports.meshopt_encodeVertexBufferBound(count, size);
      return encode(instance.exports.meshopt_encodeVertexBufferLevel, bound, source, count, size, level, version || 0);
    },
    encodeIndexBuffer: function(source, count, size) {
      assert(size == 2 || size == 4);
      assert(count % 3 == 0);
      var indices = index32(source, size);
      var bound = instance.exports.meshopt_encodeIndexBufferBound(count, maxindex(indices) + 1);
      return encode(instance.exports.meshopt_encodeIndexBuffer, bound, indices, count, 4);
    },
    encodeIndexSequence: function(source, count, size) {
      assert(size == 2 || size == 4);
      var indices = index32(source, size);
      var bound = instance.exports.meshopt_encodeIndexSequenceBound(count, maxindex(indices) + 1);
      return encode(instance.exports.meshopt_encodeIndexSequence, bound, indices, count, 4);
    },
    encodeGltfBuffer: function(source, count, size, mode) {
      var table = {
        ATTRIBUTES: this.encodeVertexBuffer,
        TRIANGLES: this.encodeIndexBuffer,
        INDICES: this.encodeIndexSequence
      };
      assert(table[mode]);
      return table[mode](source, count, size);
    },
    encodeFilterOct: function(source, count, stride, bits) {
      assert(stride == 4 || stride == 8);
      assert(bits >= 1 && bits <= 16);
      return filter(instance.exports.meshopt_encodeFilterOct, source, count, stride, bits, 16);
    },
    encodeFilterQuat: function(source, count, stride, bits) {
      assert(stride == 8);
      assert(bits >= 4 && bits <= 16);
      return filter(instance.exports.meshopt_encodeFilterQuat, source, count, stride, bits, 16);
    },
    encodeFilterExp: function(source, count, stride, bits, mode) {
      assert(stride > 0 && stride % 4 == 0);
      assert(bits >= 1 && bits <= 24);
      var table = {
        Separate: 0,
        SharedVector: 1,
        SharedComponent: 2,
        Clamped: 3
      };
      return filter(instance.exports.meshopt_encodeFilterExp, source, count, stride, bits, stride, mode ? table[mode] : 1);
    },
    encodeFilterColor: function(source, count, stride, bits) {
      assert(stride == 4 || stride == 8);
      assert(bits >= 2 && bits <= 16);
      return filter(instance.exports.meshopt_encodeFilterColor, source, count, stride, bits, 16);
    }
  };
})();

// node_modules/meshoptimizer/meshopt_decoder.module.js
var MeshoptDecoder = (function() {
  var wasm_base = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;BZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;oiliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavciGfgkcd7cetfaD87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:OhDxekcjjjj94hDkabaiavcufciGfcetfaD87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohvxekcjjjj94hvkabakcetfav87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb";
  var wasm_simd = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq;Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk;Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81ZaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qp;6ep;NegxaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meaxarczp:Sep;6ep;Megmamp;Meaxaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgxp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgPp9oamaxp;Mearp;Keczp:Rep9qgmaDaxp;Mearp;KeaPp9oaqaxp;Mearp;Keczp:Rep9qgrpmwDKYqk8AExm35Ps8E8FgDp5eakclp:RegxpEi:T:j83ibawaDp5baxpEd:T:j83ibaocwfamarpmbezHdiOAlvCXorQLgrp5eaxpEe:T:j83ibaoarp5baxpEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgxpklbaiaxpklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81ZaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qp;6ep;NegxaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meaxarczp:Sep;6ep;Megmamp;Meaxaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgxp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgPp9oamaxp;Mearp;Keczp:Rep9qgmaDaxp;Mearp;KeaPp9oaqaxp;Mearp;Keczp:Rep9qgrpmwDKYqk8AExm35Ps8E8FgDp5eakclp:RegxpEi:T:j83iKaiaDp5baxpEd:T:j83izaiamarpmbezHdiOAlvCXorQLgrp5eaxpEe:T:j83iwaiarp5baxpEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb";
  var detector = new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    3,
    2,
    0,
    0,
    5,
    3,
    1,
    0,
    1,
    12,
    1,
    0,
    10,
    22,
    2,
    12,
    0,
    65,
    0,
    65,
    0,
    65,
    0,
    252,
    10,
    0,
    0,
    11,
    7,
    0,
    65,
    0,
    253,
    15,
    26,
    11
  ]);
  var wasmpack = new Uint8Array([
    32,
    0,
    65,
    2,
    1,
    106,
    34,
    33,
    3,
    128,
    11,
    4,
    13,
    64,
    6,
    253,
    10,
    7,
    15,
    116,
    127,
    5,
    8,
    12,
    40,
    16,
    19,
    54,
    20,
    9,
    27,
    255,
    113,
    17,
    42,
    67,
    24,
    23,
    146,
    148,
    18,
    14,
    22,
    45,
    70,
    69,
    56,
    114,
    101,
    21,
    25,
    63,
    75,
    136,
    108,
    28,
    118,
    29,
    73,
    115
  ]);
  if (typeof WebAssembly !== "object") {
    return {
      supported: false
    };
  }
  var wasm = WebAssembly.validate(detector) ? unpack(wasm_simd) : unpack(wasm_base);
  var instance;
  var ready = WebAssembly.instantiate(wasm, {}).then(function(result) {
    instance = result.instance;
    instance.exports.__wasm_call_ctors();
  });
  function unpack(data) {
    var result = new Uint8Array(data.length);
    for (var i = 0; i < data.length; ++i) {
      var ch = data.charCodeAt(i);
      result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
    }
    var write = 0;
    for (var i = 0; i < data.length; ++i) {
      result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
    }
    return result.buffer.slice(0, write);
  }
  function decode(instance2, fun, target, count, size, source, filter) {
    var sbrk = instance2.exports.sbrk;
    var count4 = count + 3 & ~3;
    var tp = sbrk(count4 * size);
    var sp = sbrk(source.length);
    var heap = new Uint8Array(instance2.exports.memory.buffer);
    heap.set(source, sp);
    var res = fun(tp, count, size, sp, source.length);
    if (res == 0 && filter) {
      filter(tp, count4, size);
    }
    target.set(heap.subarray(tp, tp + count * size));
    sbrk(tp - sbrk(0));
    if (res != 0) {
      throw new Error("Malformed buffer data: " + res);
    }
  }
  var filters = {
    NONE: "",
    OCTAHEDRAL: "meshopt_decodeFilterOct",
    QUATERNION: "meshopt_decodeFilterQuat",
    EXPONENTIAL: "meshopt_decodeFilterExp",
    COLOR: "meshopt_decodeFilterColor"
  };
  var decoders = {
    ATTRIBUTES: "meshopt_decodeVertexBuffer",
    TRIANGLES: "meshopt_decodeIndexBuffer",
    INDICES: "meshopt_decodeIndexSequence"
  };
  var workers = [];
  var requestId = 0;
  function createWorker(url) {
    var worker = {
      object: new Worker(url),
      pending: 0,
      requests: {}
    };
    worker.object.onmessage = function(event) {
      var data = event.data;
      worker.pending -= data.count;
      worker.requests[data.id][data.action](data.value);
      delete worker.requests[data.id];
    };
    return worker;
  }
  function initWorkers(count) {
    var source = "self.ready = WebAssembly.instantiate(new Uint8Array([" + new Uint8Array(wasm) + "]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = " + workerProcess.name + ";" + decode.toString() + workerProcess.toString();
    var blob = new Blob([source], { type: "text/javascript" });
    var url = URL.createObjectURL(blob);
    for (var i = workers.length; i < count; ++i) {
      workers[i] = createWorker(url);
    }
    for (var i = count; i < workers.length; ++i) {
      workers[i].object.postMessage({});
    }
    workers.length = count;
    URL.revokeObjectURL(url);
  }
  function decodeWorker(count, size, source, mode, filter) {
    var worker = workers[0];
    for (var i = 1; i < workers.length; ++i) {
      if (workers[i].pending < worker.pending) {
        worker = workers[i];
      }
    }
    return new Promise(function(resolve, reject) {
      var data = new Uint8Array(source);
      var id = ++requestId;
      worker.pending += count;
      worker.requests[id] = { resolve, reject };
      worker.object.postMessage({ id, count, size, source: data, mode, filter }, [data.buffer]);
    });
  }
  function workerProcess(event) {
    var data = event.data;
    if (!data.id) {
      return self.close();
    }
    self.ready.then(function(instance2) {
      try {
        var target = new Uint8Array(data.count * data.size);
        decode(instance2, instance2.exports[data.mode], target, data.count, data.size, data.source, instance2.exports[data.filter]);
        self.postMessage({ id: data.id, count: data.count, action: "resolve", value: target }, [target.buffer]);
      } catch (error) {
        self.postMessage({ id: data.id, count: data.count, action: "reject", value: error });
      }
    });
  }
  return {
    ready,
    supported: true,
    useWorkers: function(count) {
      initWorkers(count);
    },
    decodeVertexBuffer: function(target, count, size, source, filter) {
      decode(instance, instance.exports.meshopt_decodeVertexBuffer, target, count, size, source, instance.exports[filters[filter]]);
    },
    decodeIndexBuffer: function(target, count, size, source) {
      decode(instance, instance.exports.meshopt_decodeIndexBuffer, target, count, size, source);
    },
    decodeIndexSequence: function(target, count, size, source) {
      decode(instance, instance.exports.meshopt_decodeIndexSequence, target, count, size, source);
    },
    decodeGltfBuffer: function(target, count, size, source, mode, filter) {
      decode(instance, instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
    },
    decodeGltfBufferAsync: function(count, size, source, mode, filter) {
      if (workers.length > 0) {
        return decodeWorker(count, size, source, decoders[mode], filters[filter]);
      }
      return ready.then(function() {
        var target = new Uint8Array(count * size);
        decode(instance, instance.exports[decoders[mode]], target, count, size, source, instance.exports[filters[filter]]);
        return target;
      });
    }
  };
})();

// node_modules/meshoptimizer/meshopt_simplifier.module.js
var MeshoptSimplifier = (function() {
  var wasm = "b9H79Tebbbe:Gez9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9GiuuueuiXCdilvorlwiDqkxmPbssbelve9Weiiviebeoweuec:G:Pdkr;7eko9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95br8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bw8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbDQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bqX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbkQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bxX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2Wbma9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbPl79IV9RbsDwebcekdOAq:d;OeCdbk:J1eo3ue99euE99Cue9:8Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:rjjjb8AdnabaeSmbabaeadcdtz:qjjjb8AkdnamcdGTmbalcrfci4gHcbyd1:jjjbHjjjjbbheasc:Cefasyd;8egOcdtfaeBdbasaOcefBd;8eaecbaHz:rjjjbhAcbhlcbhednadTmbcbhlabheadhHinaAaeydbgOci4fgCaCRbbgCceaOcrGgOtV86bbaCcu7aO4ceGalfhlaeclfheaHcufgHmbkcualcdtalcFFFFi0Ehekaecbyd1:jjjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egCcdtfaHBdbasaCcefBd;8eaHcFeaOz:rjjjbhQdnadTmbaecufhLcbhKindndnaQabaXcdtfgYydbgCc:v;t;h;Ev2aLGgOcdtfgAydbgHcuSmbceheinazaHcdtfydbaCSmdaOaefhHaecefheaQaHaLGgOcdtfgAydbgHcu9hmbkkazaKcdtfaCBdbaAaKBdbaKhHaKcefhKkaYaHBdbaXcefgXad9hmbkkaQcbyd:m:jjjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbhKasc:Cefasyd;8egecdtfaKBdbasaKBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd1:jjjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd1:jjjbHjjjjbbhCasc:Cefasyd;8egHcdtfaCBdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhYasc:Cefasyd;8egHcdtfaYBdbasaHcefBd;8eaCaYaialavazasc:Cefz:djjjbalcbyd1:jjjbHjjjjbbh5asc:Cefasyd;8egHcdtfa5BdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd1:jjjbHjjjjbbhOasc:Cefasyd;8egAcdtfaOBdbasaAcefBd;8eaHcFeaez:rjjjbh8EaOcFeaez:rjjjbh8FdnalTmbaEcwfhaindnaKa8AgOcefg8AcdtfydbgAaKaOcdtgefydbgHSmbaAaH9RhhaEaHcitfhga8Faefh8Ja8Eaefh8KcbhQindndnagaQcitfydbgLaO9hmba8KaOBdba8JaOBdbxekdnaKaLcdtg8LfgeclfydbgHaeydbgeSmbaEaecitgAfydbaOSmeaHae9Rh8Maecu7aHfhXaaaAfhHcbheinaXaeSmeaecefheaHydbhAaHcwfhHaAaO9hmbkaea8M6meka8Fa8LfgeaOaLaeydbcuSEBdba8KaLaOa8KydbcuSEBdbkaQcefgQah9hmbkka8Aal9hmbkaChHaYhOa8FhAa8EhQcbheindndnaeaHydbgL9hmbdnaeaOydbgL9hmbaQydbhLdnaAydbgXcu9hmbaLcu9hmba5aefcb86bbxikdnaXcuSmbaLcuSmbaeaXSmbaCaXcdtfydbaCaLcdtfydb9hmba5aefcd86bbxika5aefh8KdnaeaXSmbaeaLSmba8Kce86bbxika8Kcl86bbxdkdnaeaYaLcdtgXfydb9hmbdnaAydbg8KcuSmbaea8KSmbaQydbghcuSmbaeahSmba8FaXfydbggcuSmbagaLSmba8EaXfydbgXcuSmbaXaLSmbdnaCa8KcdtfydbgLaCaXcdtfydb9hmbaLaCahcdtfydbgXSmbaXaCagcdtfydb9hmba5aefcd86bbxlka5aefcl86bbxika5aefcl86bbxdka5aefcl86bbxeka5aefa5aLfRbb86bbkaHclfhHaOclfhOaAclfhAaQclfhQalaecefge9hmbkdnamcaGTmbaEcwfh8Jcbh8Nindndna5a8NfgyRbbg8Pc9:fPibebekdndndnaCa8Ncdtfydbgea8N9hmbdnaqmbcbhgxdkdnazTmbcbhga8NheinagaqazaecdtgefydbfRbbcdGce4VhgaYaefydbgea8N9hmbxikkcbhga8NheinagaqaefRbbcdGce4VhgaYaecdtfydbgea8N9hmbxdkka5aefRbbhexeka8NheindnaKaecdtgafgeclfydbgHaeydbgeSmbaHae9Rh8AaEaecitfh8MaCaafh8Lcbh8Kina8Ma8KcitfydbgXhednindnaKaecdtgLfgeclfydbgHaeydbgeSmbdnaCaEaecitgOfydbcdtfydba8LydbgQ9hmbcehexikaHae9Rhhaecu7aHfhAa8JaOfhHcbheinaAaeSmeaecefheaHydbhOaHcwfhHaCaOcdtfydbaQ9hmbkaeah6hexdkaYaLfydbgeaX9hmbkcbhekagaece7Vhga8Kcefg8Ka8A9hmbkkaYaafydbgea8N9hmbka8PciagceGEhekayae86bbka8Ncefg8Nal9hmbkkdnaqTmbdndnazTmbazheaChHalhOindnaqaeydbfRbbceGTmba5aHydbfcl86bbkaeclfheaHclfhHaOcufgOmbxdkkaChealhHindnaqRbbceGTmba5aeydbfcl86bbkaqcefhqaeclfheaHcufgHmbkkaChealhOa5hHindna5aeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaOcufgOmbkkamceGTmba5healhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcbhIcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhaasc:Cefasyd;8egecdtfaaBdbasaecefBd;8easc:qefcbBdbas9cb83i1eaaaialavazasc1efz:ejjjbh8RdndnaDmbcbh8Scbh8Lxekcbh8LawhecbhHindnaeIdbJbbbb9ETmbasa8LcdtfaHBdba8Lcefh8LkaeclfheaDaHcefgH9hmbkcua8Lal2gecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbh8Sasc:Cefasyd;8egecdtfa8SBdbasaecefBd;8ealTmbdna8Lmbcbh8Lxekarcd4hXdnazTmba8Lcdth8KcbhLa8ShKinaoazaLcdtfydbaX2cdtfhQasheaKhHa8LhOinaHaQaeydbcdtgAfIdbawaAfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKa8KfhKaLcefgLal9hmbxdkka8Lcdth8KcbhLa8ShKinaoaLaX2cdtfhQasheaKhHa8LhOinaHaQaeydbcdtgAfIdbawaAfIdbNUdbaeclfheaHclfhHaOcufgOmbkaKa8KfhKaLcefgLal9hmbkkcualc8S2gHalc;D;O;f8U0EgAcbyd1:jjjbHjjjjbbheasc:Cefasyd;8egOcdtfaeBdbasaOcefBd;8eaecbaHz:rjjjbhycbhqcbh8Ndna8LTmbcbhIaAcbyd1:jjjbHjjjjbbh8Nasc:Cefasyd;8egecdtfa8NBdbasaecefBd;8ea8NcbaHz:rjjjb8Acua8Lal2gecltgHaecFFFFb0Ecbyd1:jjjbHjjjjbbhqasc:Cefasyd;8egecdtfaqBdbasaecefBd;8eaqcbaHz:rjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd1:jjjbHjjjjbbhIasc:Cefasyd;8egHcdtfaIBdbasaHcefBd;8eaIcbaez:rjjjb8AkdnadTmbcbhQabhHinaaaHclfydbgLcx2fgeIdbaaaHydbgKcx2fgOIdbgR:tg8UaaaHcwfydbgXcx2fgAIdlaOIdlg8V:tg8WNaAIdbaR:tg8XaeIdla8V:tg8YN:tg8Zh80aeIdwaOIdwg81:tgBa8XNaAIdwa81:tg83a8UN:tgUh8Xa8Ya83Na8WaBN:tg8Yh8Udna8Za8ZNa8Ya8YNaUaUNMM:rgBJbbbb9EgOTmba8ZaB:vh80aUaB:vh8Xa8YaB:vh8UkayaCaKcdtfydbgAc8S2fgea8UaB:rg8Wa8UNNg85aeIdbMUdbaea8Xa8Wa8XNg86Ng87aeIdlMUdlaea80a8Wa80Ng83Ng88aeIdwMUdwaea86a8UNg86aeIdxMUdxaea83a8UNg89aeIdzMUdzaea83a8XNg8:aeIdCMUdCaea8Ua8Wa80a81Na8UaRNa8Va8XNMM:mgZNg83Ng8UaeIdKMUdKaea8Xa83Ng8XaeId3MUd3aea80a83Ng80aeIdaMUdaaea83aZNg83aeId8KMUd8Kaea8WaeIdyMUdyayaCaLcdtfydbgLc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdyayaCaXcdtfydbgKc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdydnaITmbdnaOTmba8ZaB:vh8ZaUaB:vhUa8YaB:vh8YkaIaAcltfgeaBJbbbZNg8UaUNg8WaeIdlMUdlaea8Ua8ZNg8XaeIdwMUdwaea8Ua8YNg80aeIdbMUdbaea8UaR:ma8YNaUa8VN:ta81a8ZN:tNg8UaeIdxMUdxaIaLcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxaIaKcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxkaHcxfhHaQcifgQad6mbkkdnalTmbJ;n;m;m89J:v:;;w8ZamczGEh8YcbhOaChAaahHayheindnaOaAydb9hmbaecxfgQaQIdbJbbbbMUdbaeczfgQaQIdbJbbbbMUdbaecCfgQaQIdbJbbbbMUdbaea8YaecyfgQIdbg8ZNg8UaeIdbMUdbaeclfgLa8UaLIdbMUdbaecwfgLa8UaLIdbMUdbaecKfgLaLIdbaHIdbg8Xa8UN:tUdbaHcwfIdbh8Waec3fgLaLIdba8UaHclfIdbg80N:tUdbaecafgLaLIdba8Ua8WN:tUdbaec8KfgLIdbhUaQa8Za8UMUdbaLaUa8Ua8Wa8WNa8Xa8XNa80a80NMMNMUdbkaAclfhAaHcxfhHaec8SfhealaOcefgO9hmbkkdnadTmbcbhXabhKinabaXcdtfhLcbhHina5aLaHc:G1jjbfydbcdtfydbgOfRbbhedndna5aKaHfydbgAfRbbgQc99fcFeGcpe0mbaec99fcFeGc;:e6mekdnaQcufcFeGce0mba8EaAcdtfydbaO9hmekdnaecufcFeGce0mba8FaOcdtfydbaA9hmekJbbacJbbacJbbbZaecFeGceSEaQcFeGceSEh88aaaOcx2fgeIdwaaaAcx2fgQIdwgB:tg80:mh86aeIdlaQIdlg83:tg8Z:mh89aeIdbaQIdbgR:tgU:mh8:dnaaaLaHc:K1jjbfydbcdtfydbcx2fgeIdwaB:tg8Va80a80NaUaUNa8Za8ZNMMg8YNa8Va80NaeIdbaR:tg81aUNa8ZaeIdla83:tg85NMMg8Wa80N:tg8Xa8XNa81a8YNa8WaUN:tg8Ua8UNa85a8YNa8Wa8ZN:tg8Wa8WNMM:rg87Jbbbb9ETmba8Xa87:vh8Xa8Wa87:vh8Wa8Ua87:vh8Uka88a8Y:rNg8Ya8XaBNa8UaRNa83a8WNMM:mgZNg87aZNhZa8Xa87Nhna8Wa87Nhca8Ua87Nh9ca8Ya8XNg87a8WNhJa87a8UNh9ea8Ya8WNgTa8UNhSa8Xa87Nh87a8WaTNhTa8Ua8Ya8UNNh9hdnaUa85Na81a89NMg8Xa8XNa8Za8VNa85a86NMg8Ua8UNa80a81Na8Va8:NMg8Wa8WNMM:rg80Jbbbb9ETmba8Xa80:vh8Xa8Wa80:vh8Wa8Ua80:vh8UkayaCaAcdtfydbc8S2fgeaeIdba9ha8Ua88a80:rNg80a8UNNMgUMUdbaeaTa8Wa80a8WNg8VNMg81aeIdlMUdlaea87a8Xa80a8XNg8ZNMg85aeIdwMUdwaeaSa8Va8UNMg8VaeIdxMUdxaea9ea8Za8UNMg87aeIdzMUdzaeaJa8Za8WNMg8ZaeIdCMUdCaea9ca8Ua80a8XaBNa8UaRNa83a8WNMMgB:mNg80NMg8UaeIdKMUdKaeaca8Wa80NMg8WaeId3MUd3aeana8Xa80NMg8XaeIdaMUdaaeaZaBa80N:tg80aeId8KMUd8Kaea8YJbbbbMg8YaeIdyMUdyayaCaOcdtfydbc8S2fgeaUaeIdbMUdbaea81aeIdlMUdlaea85aeIdwMUdwaea8VaeIdxMUdxaea87aeIdzMUdzaea8ZaeIdCMUdCaea8UaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea80aeId8KMUd8Kaea8YaeIdyMUdykaHclfgHcx9hmbkaKcxfhKaXcifgXad6mbka8LTmbcbhKinJbbbbh8YaaabaKcdtfgeclfydbgXcx2fgHIdwaaaeydbg8Kcx2fgOIdwg81:tg8Wa8WNaHIdbaOIdbg85:tg8Xa8XNaHIdlaOIdlg87:tg80a80NMMgRaaaecwfydbghcx2fgeIdwa81:tg8ZNa8Wa8Wa8ZNa8XaeIdba85:tgUNa80aeIdla87:tgBNMMg8UN:tJbbbbJbbjZaRa8Za8ZNaUaUNaBaBNMMg8VNa8Ua8UN:tg83:va83Jbbbb9BEg83Nh89a8Va8WNa8Za8UN:ta83Nh8:aRaBNa80a8UN:ta83NhZa8Va80NaBa8UN:ta83NhnaRaUNa8Xa8UN:ta83Nhca8Va8XNaUa8UN:ta83Nh9ca8XaBNaUa80N:tg8Ua8UNa80a8ZNaBa8WN:tg8Ua8UNa8WaUNa8Za8XN:tg8Ua8UNMM:rJbbbZNh8Ua8Sa8Ka8L2ggcdtfhHa8Saha8L2gEcdtfhOa8SaXa8L2g8JcdtfhAa81:mhJa87:mh9ea85:mhTcbhQa8LhLJbbbbhBJbbbbh83JbbbbhRJbbbbh8VJbbbbh81Jbbbbh85Jbbbbh87Jbbbbh88Jbbbbh86inascjdfaQfgecwfa8Ua8:aAIdbaHIdbg8Z:tg80Na89aOIdba8Z:tgUNMg8WNUdbaeclfa8Uana80NaZaUNMg8XNUdbaea8Ua9ca80NacaUNMg80NUdbaecxfa8UaJa8WNa9ea8XNa8ZaTa80NMMMg8ZNUdba8Ua8Wa8XNNa8VMh8Va8Ua8Wa80NNa81Mh81a8Ua8Xa80NNa85Mh85a8Ua8Za8ZNNa8YMh8Ya8Ua8Wa8ZNNaBMhBa8Ua8Xa8ZNNa83Mh83a8Ua80a8ZNNaRMhRa8Ua8Wa8WNNa87Mh87a8Ua8Xa8XNNa88Mh88a8Ua80a80NNa86Mh86aHclfhHaAclfhAaOclfhOaQczfhQaLcufgLmbka8Na8Kc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8NaXc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8Nahc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdyaqagcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaqa8JcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaqaEcltfhLcbhHa8LhAinaLaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkaKcifgKad6mbkkcbhOdndnamcwGg9imbJbbbbh85cbh6cbh9kcbh0xekcbh6a3cbyd1:jjjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua0alabadaCz:fjjjbgAcltaAcjjjjiGEcbyd1:jjjbHjjjjbbh9kasc:Cefasyd;8egecdtfa9kBdbasaecefBd;8ea9kaAa0aaalz:gjjjbJFFuuh85aATmba9kheaAhHinaeIdbg8Ua85a85a8U9EEh85aeclfheaHcufgHmbkaAh6kasydNeh9mdnalTmba9mclfhea9mydbhAa5hHalhQcbhOincbaeydbgLaA9RaHRbbcpeGEaOfhOaHcefhHaeclfheaLhAaQcufgQmbkaOce4hOkcuadaO9Rcifg9ncx2a9nc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ecua9ncdta9ncFFFFi0Ecbyd1:jjjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8ea3cbyd1:jjjbHjjjjbbhDasc:Cefasyd;8egecdtfaDBdbasaecefBd;8ealcbyd1:jjjbHjjjjbbh9pasc:Cefasyd;8egecdtfa9pBdbasaecefBd;8eaxaxNa8RJbbjZamclGEgnanN:vh88Jbbbbh86dnadak9nmbdna9nci6mbasyd:yeh9qa8Lclth9ra8Pcwfh9sJbbbbh87Jbbbbh86inascNefabadalaCz:cjjjbabh8Kcbh8Mcbh3inaba3cdtfhgcbheindnaCa8KaefydbgOcdtgXfydbgAaCagaec:W1jjbfydbcdtfydbgHcdtghfydbgQSmba5aHfRbbgKcv2a5aOfRbbgLfc;a1jjbfRbbg8JaLcv2aKfgEc;a1jjbfRbbg8AVcFeGTmbdnaQaA9nmbaEc;G1jjbfRbbcFeGmekdnaLcufcFeGce0mbaKTmba8EaXfydbaH9hmekdnaLTmbaKcufcFeGce0mba8FahfydbaO9hmeka8Pa8Mcx2fgAaHaOa8AcFeGgQEBdlaAaOaHaQEBdbaAaQa8JGcb9hBdwa8Mcefh8Mkaeclfgecx9hmbkdna3cifg3ad9pmba8Kcxfh8Ka8Mcifa9n9nmekka8MTmdcbhhinayaCa8Pahcx2fgKydbgQcdtgAfydbc8S2fgeIdwaaaKydlgLcx2fgHIdwg8XNaeIdzaHIdbg80NaeIdaMg8Ua8UMMa8XNaeIdlaHIdlg8ZNaeIdCa8XNaeId3Mg8Ua8UMMa8ZNaeIdba80NaeIdxa8ZNaeIdKMg8Ua8UMMa80NaeId8KMMM:lh8UJbbbbJbbjZaeIdyg8W:va8WJbbbb9BEh8WdndnaKydwg8KmbJFFuuh81xekJbbbbJbbjZayaCaLcdtfydbc8S2fgeIdygU:vaUJbbbb9BEaeIdwaaaQcx2fgHIdwgUNaeIdzaHIdbg8YNaeIdaMgBaBMMaUNaeIdlaHIdlgBNaeIdCaUNaeId3MgUaUMMaBNaeIdba8YNaeIdxaBNaeIdKMgUaUMMa8YNaeId8KMMM:lNh81ka8Wa8UNh8Vdna8LTmba8NaQc8S2fgHIdwa8XNaHIdza80NaHIdaMg8Ua8UMMa8XNaHIdla8ZNaHIdCa8XNaHId3Mg8Ua8UMMa8ZNaHIdba80NaHIdxa8ZNaHIdKMg8Ua8UMMa80NaHId8KMMMh8UaqaQa8L2ggcltfheaHIdyhUa8SaLa8L2gEcdtfgXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8KmbJbbbbh8Wxeka8NaLc8S2fgOIdwaaaQcx2fgeIdwg8YNaOIdzaeIdbgBNaOIdaMg8Wa8WMMa8YNaOIdlaeIdlg83NaOIdCa8YNaOId3Mg8Wa8WMMa83NaOIdbaBNaOIdxa83NaOIdKMg8Wa8WMMaBNaOId8KMMMh8Wa8SagcdtfhHaqaEcltfheaOIdyhRa8LhOinaHIdbgUaUaRNaecxfIdba8YaecwfIdbNaBaeIdbNa83aeclfIdbNMMMgUaUM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8Wka8Va8U:lMh8Va81a8WMh81dndndna5aQfRbbc9:fPdbedkdna8Fa8Ea8EaAfydbaLSEaYaAfydbgXcdtfydbgAcu9hmbaYaLcdtfydbhAka8NaXc8S2fgOIdwaaaAcx2fgeIdwg8XNaOIdzaeIdbg80NaOIdaMg8Ua8UMMa8XNaOIdlaeIdlg8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8Ua8SaAa8L2ggcdtfhHaqaXa8L2gEcltfheaOIdyhUa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8KmbJbbbbh8Wxeka8NaAc8S2fgOIdwaaaXcx2fgeIdwg80NaOIdzaeIdbg8ZNaOIdaMg8Wa8WMMa80NaOIdlaeIdlgUNaOIdCa80NaOId3Mg8Wa8WMMaUNaOIdba8ZNaOIdxaUNaOIdKMg8Wa8WMMa8ZNaOId8KMMMh8Wa8SaEcdtfhHaqagcltfheaOIdyh8Ya8LhOinaHIdbg8Xa8Xa8YNaecxfIdba80aecwfIdbNa8ZaeIdbNaUaeclfIdbNMMMg8Xa8XM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8Wka8Va8U:lMh8Va81a8WMh81xdkaYaAfydbgAaQSmbina8NaAc8S2fgHIdwa8XNaHIdza80NaHIdaMg8Ua8UMMa8XNaHIdla8ZNaHIdCa8XNaHId3Mg8Ua8UMMa8ZNaHIdba80NaHIdxa8ZNaHIdKMg8Ua8UMMa80NaHId8KMMMh8UaqaAa8L2cltfheaHIdyhUaXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbka8Va8U:lMh8VaYaAcdtfydbgAaQ9hmbkka5aLfRbbci9hmba8KTmbaYaLcdtfydbgAaLSmba8SagcdtfhXaaaQcx2fgeIdbh8XaeIdwh80aeIdlh8Zina8NaAc8S2fgHIdwa80NaHIdza8XNaHIdaMg8Ua8UMMa80NaHIdla8ZNaHIdCa80NaHId3Mg8Ua8UMMa8ZNaHIdba8XNaHIdxa8ZNaHIdKMg8Ua8UMMa8XNaHId8KMMMh8UaqaAa8L2cltfheaHIdyhUaXhHa8LhOinaHIdbg8Wa8WaUNaecxfIdba80aecwfIdbNa8XaeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbka81a8U:lMh81aYaAcdtfydbgAaL9hmbkkaKa81a8Va81a8V9DgeEUdwaKaQaLaea8Kcb9hGgeEBdlaKaLaQaeEBdbahcefgha8M9hmbkascjdfcbcj;qbz:rjjjb8Aa9shea8MhHinascjdfaeydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbcefBdbaecxfheaHcufgHmbkcbhecbhHinascjdfaefgOydbhAaOaHBdbaAaHfhHaeclfgecj;qb9hmbkcbhea9shHinascjdfaHydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbgOcefBdba9oaOcdtfaeBdbaHcxfhHa8Maecefge9hmbkadak9RgOci9Uh9tdnalTmbcbheaDhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh9ua9pcbalz:rjjjbh3aOcO9Uh9va9tce4h9wcbh8Acbh8Jdnina8Pa9oa8Jcdtfydbcx2fgEIdwg8Ua889Emea8Aa9t9pmeJFFuuh8Wdna9wa8M9pmba8Pa9oa9wcdtfydbcx2fIdwJbb;aZNh8Wkdna8Ua8W9ETmba8Ua869ETmba8Aa9v0mdkdna3aCaEydlghcdtg9xfydbgAfg9yRbba3aCaEydbg8Kcdtg9zfydbgefg9ARbbVmba5a8KfRbbh9Bdna9maecdtfgHclfydbgOaHydbgHSmbaOaH9RhQaaaAcx2fhKaaaecx2fhXa9qaHcitfhecbhHcehgdnindnaDaeydbcdtfydbgOaASmbaDaeclfydbcdtfydbgLaASmbaOaLSmbaaaLcx2fgLIdbaaaOcx2fgOIdbg8X:tg8UaXIdlaOIdlg80:tg8YNaXIdba8X:tgBaLIdla80:tg8WN:tg8Za8UaKIdla80:tg83NaKIdba8X:tgRa8WN:tg80Na8WaXIdwaOIdwgU:tg8VNa8YaLIdwaU:tg8XN:tg8Ya8WaKIdwaU:tg81Na83a8XN:tg8WNa8XaBNa8Va8UN:tgUa8XaRNa81a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmdkaecwfheaHcefgHaQ6hgaQaH9hmbkkagceGTmba9wcefh9wxekdndndndna9Bc9:fPdebdka8KheinaDaecdtgefahBdbaYaefydbgea8K9hmbxikkdna8Fa8Ea8Ea9zfydbahSEaYa9zfydbg8Kcdtfydbgecu9hmbaYa9xfydbhekaDa9zfahBdbaehhkaDa8KcdtfahBdbka9Ace86bba9yce86bbaEIdwg8Ua86a86a8U9DEh86a9ucefh9ucecda9BceSEa8Afh8Aka8Jcefg8Ja8M9hmbkka9uTmddnalTmbcbhLcbhXindnaDaXcdtgefydbgOaXSmbaCaOcdtfydbh8KdnaXaCaefydb9hghmbaya8Kc8S2fgeayaXc8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdyaITmbaIa8KcltfgeaIaXcltfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxka8LTmba8NaOc8S2fgea8NaXc8S2ggfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9raO2hKaqhHa8LhAinaHaKfgeaHaLfgOIdbaeIdbMUdbaeclfgQaOclfIdbaQIdbMUdbaecwfgQaOcwfIdbaQIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaAcufgAmbkahmbJbbbbJbbjZayagfgeIdyg8U:va8UJbbbb9BEaeIdwaaa8Kcx2fgHIdwg8UNaeIdzaHIdbg8WNaeIdaMg8Xa8XMMa8UNaeIdlaHIdlg8XNaeIdCa8UNaeId3Mg8Ua8UMMa8XNaeIdba8WNaeIdxa8XNaeIdKMg8Ua8UMMa8WNaeId8KMMM:lNg8Ua87a87a8U9DEh87kaLa9rfhLaXcefgXal9hmbkcbhHa8EheindnaeydbgOcuSmbdnaHaDaOcdtgAfydbgO9hmbcuhOa8EaAfydbgAcuSmbaDaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkcbhHa8FheindnaeydbgOcuSmbdnaHaDaOcdtgAfydbgO9hmbcuhOa8FaAfydbgAcuSmbaDaAcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkka87a86a8LEh87cbhHabhecbhOindnaCaDaeydbcdtfydbgLcdtfydbgAaCaDaeclfydbcdtfydbgKcdtfydbgQSmbaAaCaDaecwfydbcdtfydbg8KcdtfydbgXSmbaQaXSmbabaHcdtfgAaLBdbaAcwfa8KBdbaAclfaKBdbaHcifhHkaecxfheaOcifgOad6mbkdndna9imbaHhdxekdnaHak0mbaHhdxekdna85a879FmbaHhdxekJFFuuh85cbhdabhecbhOindna9ka0aeydbgAcdtfydbcdtfIdbg8Ua879ETmbaeclf8Pdbh9CabadcdtfgQaABdbaQclfa9C83dba8Ua85a85a8U9EEh85adcifhdkaecxfheaOcifgOaH6mbkkadak0mbxdkkascNefabadalaCz:cjjjbkdndnadak0mbadhOxekdna9imbadhOxekdna85a889FmbadhOxekcehLina85Jbb;aZNg8Ua88a8Ua889DEh8XJbbbbh8Udna6Tmba9khea6hHinaeIdbg8Wa8Ua8Wa8X9FEa8Ua8Wa8U9EEh8UaeclfheaHcufgHmbkkJFFuuh85cbhOabhecbhHindna9ka0aeydbgAcdtfydbcdtfIdbg8Wa8X9ETmbaeclf8Pdbh9CabaOcdtfgQaABdbaQclfa9C83dba8Wa85a85a8W9EEh85aOcifhOkaecxfheaHcifgHad6mbkdnaLaOad9hVceGmbadhOxdka8Ua86a86a8U9DEh86aOak9nmecbhLaOhda85a889FmbkkdnamcjjjjdGTmba9pcbalz:rjjjbhLdnaOTmbabheaOhHinaLaeydbgAfa5aAfRbbcl9h86bbaeclfheaHcufgHmbkkascNefabaOalaCz:cjjjbalTmbcbhQasyd:yehgindnaLaQfRbbTmbdna5aQfRbbgecl0mbceaetcQGmekdnaCaQcdtgKfydbgeaQSmbaaaQcx2fgHaaaecx2fge8Pdb83dbaHcwfaecwfydbBdbxekayaQc8S2fgeIdyg8Ua8UJL:3;rUNg8UMh88aeIdwa8UMhRaeIdla8UMh8VaeIdba8UMhUaeIdaa8UaaaQcx2fg8KIdwg89N:th81aeId3a8Ua8KIdlg8:N:th85aeIdKa8KIdbgZa8UN:th8YJbbbbhcaeIdCJbbbbMh87aeIdzJbbbbMhBaeIdxJbbbbMh83dndna8LTmbaQhAinJbbbba88a8NaAc8S2fgHIdyg8U:va8UJbbbb9BEh8UaqaAa8L2cltfheaHIdaa88Na81Mh81aHId3a88Na85Mh85aHIdKa88Na8YMh8YaHIdCa88Na87Mh87aHIdza88NaBMhBaHIdxa88Na83Mh83aHIdwa88NaRMhRaHIdla88Na8VMh8VaHIdba88NaUMhUa8LhHina81aecxfIdbg8ZaecwfIdbg8WNa8UN:th81a85a8ZaeclfIdbg8XNa8UN:th85a87a8Wa8XNa8UN:th87aUaeIdbg80a80Na8UN:thUa8Ya8Za80Na8UN:th8YaBa8Wa80Na8UN:thBa83a8Xa80Na8UN:th83aRa8Wa8WNa8UN:thRa8Va8Xa8XNa8UN:th8VaeczfheaHcufgHmbkaYaAcdtfydbgAaQ9hmbkaITmbaIaQcltfgeIdxhTaeIdwh9caeIdlhJaeIdbh8UxekJbbbbhTJbbbbh9cJbbbbhJJbbbbh8UkaBaU:vg8Xa8YNa81:ta87aBa83aU:vg8WN:tg81a8Va83a8WN:tg8Z:vg80a8Wa8YNa85:tg8VN:th85a9ca8Ua8XN:taJa8Ua8WN:tg83a80N:tg87aRaBa8XN:ta81a80N:tgB:vgR:mh81a83a8Z:vg9c:mhJdnJbbbba8Ua8UaU:vg9eN:ta83a9cN:ta87aRN:tg83:la88J:983:g81Ng8U9ETmba81a85NaJa8VNa9ea8YNaT:tMMa83:vhckaU:la8U9ETmba8Z:la8U9ETmbaB:la8U9ETmba9e:macNa8X:ma81acNa85aB:vMg85Na8W:maJacNa80:ma85Na8Va8Z:vMMg87Na8Y:maU:vMMMh88a9maKfgeclfydbgHaeydbge9RhXagaecitfhKJbbbbh8UdnaHaeSghmbJbbbbh8UaKheaXhAinaaaeclfydbcx2fgHIdwa89:tg8Wa8WNaHIdbaZ:tg8Wa8WNaHIdla8::tg8Wa8WNMMg8Waaaeydbcx2fgHIdwa89:tg8Xa8XNaHIdbaZ:tg8Xa8XNaHIdla8::tg8Xa8XNMMg8Xa8Ua8Ua8X9DEg8Ua8Ua8W9DEh8UaecwfheaAcufgAmbkka85a89:tg8Wa8WNa88aZ:tg8Wa8WNa87a8::tg8Wa8WNMMa8U:rg8Ua8UN9EmbdnahmbcbhAcehhdninaaaKclfydbcx2fgeIdbaaaKydbcx2fgHIdbg8X:tg8Ua8:aHIdlg80:tg8YNaZa8X:tgBaeIdla80:tg8WN:tg8Za8Ua87a80:tg83Na88a8X:tgRa8WN:tg80Na8Wa89aHIdwgU:tg8VNa8YaeIdwaU:tg8XN:tg8Ya8Wa85aU:tg81Na83a8XN:tg8WNa8XaBNa8Va8UN:tgUa8XaRNa81a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmeaKcwfhKaAcefgAaX6hhaXaA9hmbkkahceGmeka8Ka85Udwa8Ka87Udla8Ka88UdbkaQcefgQal9hmbkdndna8LTmba8LclthYa8Lcdth8KcbhKa8ShXindnaLaKfRbbTmba5aKfRbbclSmbJbbbbJbbjZa8NaKc8S2fIdyg8U:va8UJbbbb9BEh8UaaaCaKcdtfydbcx2fhHaqheaXhAa8LhQinaAa8UaecwfIdbaHIdwNaeIdbaHIdbNaeclfIdbaHIdlNMMaecxfIdbMNUdbaeczfheaAclfhAaQcufgQmbkkaqaYfhqaXa8KfhXaKcefgKal9hmbkarcd4hXavcd4hYasId:qeh8UasId:meh8WasId1eh8XazTmea8Lcdth8KcbhKindnaLaKfRbbTmbaiazaKcdtfydbgCaY2cdtfgeaaaKcx2fgHIdba8RNa8XMUdbaeaHIdla8RNa8WMUdlaeaHIdwa8RNa8UMUdwaoaCaX2cdtfhQashea8ShHa8LhCinaQaeydbcdtgAfaHIdbawaAfIdb:vUdbaeclfheaHclfhHaCcufgCmbkka8Sa8Kfh8SaKcefgKal9hmbxikkavcd4hCasId:qeh8UasId:meh8WasId1eh8XdnazTmbazheindna9pRbbTmbaiaeydbaC2cdtfgHaaIdba8RNa8XMUdbaHaaclfIdba8RNa8WMUdlaHaacwfIdba8RNa8UMUdwka9pcefh9paeclfheaacxfhaalcufglmbxikkaCcdtheindna9pRbbTmbaiaaIdba8RNa8XMUdbaiclfaaclfIdba8RNa8WMUdbaicwfaacwfIdba8RNa8UMUdbka9pcefh9paacxfhaaiaefhialcufglmbxdkka8Lcdth8KcbhKindnaLaKfRbbTmbaiaKaY2cdtfgeaaaKcx2fgHIdba8RNa8XMUdbaeaHIdla8RNa8WMUdlaeaHIdwa8RNa8UMUdwaoaKaX2cdtfhQashea8ShHa8LhCinaQaeydbcdtgAfaHIdbawaAfIdb:vUdbaeclfheaHclfhHaCcufgCmbkka8Sa8Kfh8SaKcefgKal9hmbkkdnamcjjjjlGTmbazmbaOTmbcbhLabheina5aeydbgAfRbbc3thKaecwfgXydbhHdndna8EaAcdtg8KfydbaeclfgYydbgCSmbcbhQa8FaCcdtfydbaA9hmekcjjjj94hQkaeaKaQVaAVBdba5aCfRbbc3thKdndna8EaCcdtfydbaHSmbcbhQa8FaHcdtfydbaC9hmekcjjjj94hQkaYaKaQVaCVBdba5aHfRbbc3thQdndna8EaHcdtfydbaASmbcbhCa8Fa8KfydbaH9hmekcjjjj94hCkaXaQaCVaHVBdbaecxfheaLcifgLaO6mbkkdnazTmbaOTmbaOheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPana86:rNUdbkasyd;8egecdtasc:Ceffc98fhHdninaeTmeaHydbcbyd:m:jjjbH:bjjjbbaHc98fhHaecufhexbkkascj;sbf8KjjjjbaOk;Yieouabydlhvabydbclfcbaicdtz:rjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd1:jjjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:rjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd:m:jjjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkawclfhwabclfhbaiaDcefgD9hmbkkk:hrdvuv998Jjjjjbca9Rgoczfcwfcbyd11jjbBdbaocb8Pdj1jjb83izaocwfcbydN1jjbBdbaocb8Pd:m1jjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:ZlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvc:G1jjbfydbcdtfydbcdtfydbhodnabalawavfydbcdtfydbgqcdtfgkydbgvaqSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnabaocdtfgkydbgvaoSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnabavfgDydbgvaxSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhvabhocbhkindndnavalydbgq9hmbdnavaoydbgq9hmbaoakBdbakcefhkxdkaoabaqcdtfydbBdbxekaoabaqcdtfydbBdbkaoclfhoalclfhlaeavcefgv9hmbkakk;Jiilud99duabcbaecltz:rjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakclfgxaqaxIdbMUdbakcwfgxaDaxIdbMUdbakcxfgkakIdbJbbjZMUdbaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhraehkinarcxfgoIdbhDaocbBdbararIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbarclfgoaDaoIdbNUdbarcwfgoaDaoIdbNUdbarczfhrakcufgkmbkkdnalTmbinavadydbcltfgrcxfgkaicwfIdbarcwfIdb:tgDaDNaiIdbarIdb:tgDaDNaiclfIdbarclfIdb:tgDaDNMMgDakIdbgqaqaD9DEUdbadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhrinabarIdbUdbarczfhrabclfhbaecufgembkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:p8Koque99due99iuq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:rjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd1:jjjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhHdndninashYaHhXaPhrakg8AaQ9pmeaXar9Rcd9imeavaXcufavaX9iEarcefavar9kEhzdnalTmbazcuf:YhwdnaoTmbcbhOaihPaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhHxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhHxekcjjjj94hHkaHcqthHdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaHasVhHdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaHascCtVhHkaPaHBdbaPclfhPavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhPindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhHxekcjjjj94hHkaHcCthHdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascqtaHVhHdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskaOaHasVBdbavcxfhvaOclfhOaPcufgPmbkkcbhOdnadTmbaehvcbhPinaOaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgs9haiavydbcdtfydbgAaH9haAas9hGGfhOavcxfhvaPcifgPad6mbkkaYhsaOhkaXhHazhPdnaOaQ9nmbaOhsa8AhkazhHarhPkdndnaKcl0mbdnaY:Zgwa8A:ZgC:taz:YgEar:Y:tg3aEaX:Y:tg5aO:Zg8EaL:tNNNawaL:ta5NaCa8E:tNaCaL:ta3Na8Eaw:tNM:vaEMJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPaHfcd9ThvkaKcefgKcs9hmbxdkka8AhkarhPkdndndnakmbJbbjZhwcbhicdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkcbhOaqcuavcdtgravcFFFFi0Ecbyd1:jjjbHjjjjbbgzBdCaqciBd2aqamcbyd1:jjjbHjjjjbbgXBdKaqclBd2dndndndnalTmbaPcuf:YhwaoTmecbhOaihHaxhPindndnaoaOfRbbceGTmbaOcjjjjlVhsxekdndnaPclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascqthsdndnaPcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkasaAVhsdndnaPIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkasaAcCtVhskaHasBdbaHclfhHaPcxfhPalaOcefgO9hmbxikkazcFearz:rjjjb8AcbhrcbhvxdkaxhOaihPalhHindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohsxekcjjjj94hskascCthsdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqtasVhsdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaPasaAVBdbaOcxfhOaPclfhPaHcufgHmbkkazcFearz:rjjjbhAavcufhocbhrcbhzindndndnaAaiazcdtgKfydbgHcm4aH7c:v;t;h;Ev2gvcs4av7aoGgPcdtfgsydbgOcuSmbcehvinaiaOcdtgOfydbaHSmdaPavfhOavcefhvaAaOaoGgPcdtfgsydbgOcu9hmbkkasazBdbarhvarcefhrxekaXaOfydbhvkaXaKfavBdbazcefgzal9hmbkcuarc8S2gOarc;D;O;f8U0EhvkcbhAaqavcbyd1:jjjbHjjjjbbgvBd3aqcvBd2avcbaOz:rjjjbhOdnadTmbaehiinJbbnnJbbjZaXaiydbgHcdtfydbgvaXaiclfydbgPcdtfydbgzSavaXaicwfydbgscdtfydbgKSGgoEh8FdnaxaPcx2fgPIdbaxaHcx2fgHIdbg8E:tgCaxascx2fgsIdlaHIdlg3:tgwNasIdba8E:tgEaPIdla3:tgaN:tgLaLNaaasIdwaHIdwg5:tghNawaPIdwa5:tgaN:tgwawNaaaENahaCN:tgCaCNMM:rgEJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNgaMUdbavaCaEaCNghNggavIdlMUdlavaLaEaLNg8FNg8JavIdwMUdwavahawNghavIdxMUdxava8FawNg8KavIdzMUdzava8FaCNg8FavIdCMUdCavawaEaLa5Nawa8ENa3aCNMM:mg3Ng8ENgwavIdKMUdKavaCa8ENgCavId3MUd3avaLa8ENgLavIdaMUdaava8Ea3Ng8EavId8KMUd8KavaEavIdyMUdydnaombaOazc8S2fgvaaavIdbMUdbavagavIdlMUdlava8JavIdwMUdwavahavIdxMUdxava8KavIdzMUdzava8FavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava8EavId8KMUd8KavaEavIdyMUdyaOaKc8S2fgvaaavIdbMUdbavagavIdlMUdlava8JavIdwMUdwavahavIdxMUdxava8KavIdzMUdzava8FavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava8EavId8KMUd8KavaEavIdyMUdykaicxfhiaAcifgAad6mbkkcbhHaqcuarcdtgvarcFFFFi0Egicbyd1:jjjbHjjjjbbgPBdaaqcoBd2aqaicbyd1:jjjbHjjjjbbgiBd8KaqcrBd2aPcFeavz:rjjjbhzdnalTmbaXhPinJbbbbJbbjZaOaPydbgsc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnazascdtgvfgsydbcuSmbaiavfIdbaw9ETmekasaHBdbaiavfawUdbkaPclfhPaxcxfhxalaHcefgH9hmbkkJbbbbhwdnarTmbinaiIdbgCawawaC9DEhwaiclfhiarcufgrmbkkakcd4akfhOcehiinaigvcethiavaO6mbkcbhiaqcuavcdtgOavcFFFFi0Ecbyd1:jjjbHjjjjbbgPBdyaPcFeaOz:rjjjbhsdnadTmbavcufhAcbhrcbhxindnaXaeaxcdtfgvydbcdtfydbgiaXavclfydbcdtfydbgOSmbaiaXavcwfydbcdtfydbgvSmbaOavSmbazavcdtfydbhHdndnazaOcdtfydbgvazaicdtfydbgi9pmbavaH9pmbaHhlaihoavhHxekdnaHai9pmbaHav9pmbaihlavhoxekavhlaHhoaihHkabarcx2fgvaHBdbavcwfaoBdbavclfalBdbdnasaoc:3F;N8N2alc:F:b:DD27aHc;D;O:B8J27aAGgOcdtfgvydbgicuSmbcehPinaPhvdnabaicx2fgiydbaH9hmbaiydlal9hmbaiydwaoSmikavcefhPasaOavfaAGgOcdtfgvydbgicu9hmbkkavarBdbarcefhrkaxcifgxad6mbkarci2hikdnaDmbcwhvxdkaw:rhwcwhvkaDawUdbkavcdthvdninavTmeavc98fgvaqcxffydbcbyd:m:jjjbH:bjjjbbxbkkaqc;Wbf8Kjjjjbaik:2ldwue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:rjjjb8AdnabaeSmbabaeadcdtz:qjjjb8AkarcualcdtalcFFFFi0EgDcbyd1:jjjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhkarcxfaryd2gxcdtgmfakBdbaraxcefgPBd2akaialavcbcbz:ejjjb8AarcxfaPcdtfaDcbyd1:jjjbHjjjjbbgvBdbaraxcdfgiBd2arcxfaicdtfcuavalaeadaqz:fjjjbgecltaecjjjjiGEcbyd1:jjjbHjjjjbbgiBdbaiaeavakalz:gjjjbdnadTmbaoaoNhocbhwabhlcbhkindnaiavalydbgecdtfydbcdtfIdbao9ETmbalclf8PdbhsabawcdtfgqaeBdbaqclfas83dbawcifhwkalcxfhlakcifgkad6mbkkaxcifhlamarcxffcwfhkdninalTmeakydbcbyd:m:jjjbH:bjjjbbakc98fhkalcufhlxbkkarc;Wbf8Kjjjjbawk:FCoDud99rue99iul998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:rjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd1:jjjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd1:jjjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhmcbhCadhXcbhQinaChLaeamgKcufaeaK9iEaPgDcefaeaD9kEhYdndnadTmbaYcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdbaONJbbbZMg8A:lJbbb9p9DTmba8A:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:rjjjbh3cbh5cbhPindna3axaPcdtfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbaeaCSmbcehiina3amaifaAGgmcdtfgEydbgecuSmeaicefhiaeaC9hmbkkaEaCBdba5aecuSfh5aPcefgPad9hmbxdkkazcFeasz:rjjjb8Acbh5kaDaYa5ar0giEhPaLa5aiEhCdna5arSmbaYaKaiEgmaP9Rcd9imbdndnaQcl0mbdnaX:ZgOaL:Zg8A:taY:Yg8EaD:Y:tg8Fa8EaK:Y:tgaa5:ZghaH:tNNNaOaH:taaNa8Aah:tNa8AaH:ta8FNahaO:tNM:va8EMJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPamfcd9Theka5aXaiEhXaQcefgQcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd1:jjjbHjjjjbbg5BdKawclBd2aPcuf:Yh8AdndnadTmbaqhiaxheadhmindndnaiIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhCxekcjjjj94hCkaCcCthCdndnaiclfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaEcqtaCVhCdndnaicwfIdba8ANJbbbZMgO:lJbbb9p9DTmbaO:OhExekcjjjj94hEkaeaCaEVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:rjjjbh3cbhDcbhYindndndna3axaYcdtgKfydbgCcm4aC7c:v;t;h;Ev2gics4ai7aAGgmcdtfgEydbgecuSmbcehiinaxaecdtgefydbaCSmdamaifheaicefhia3aeaAGgmcdtfgEydbgecu9hmbkkaEaYBdbaDhiaDcefhDxeka5aefydbhika5aKfaiBdbaYcefgYad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:rjjjb8AcbhDcbhekawaecbyd1:jjjbHjjjjbbgeBd3awcvBd2aecbaiz:rjjjbhEavcd4hKdnadTmbdnalTmbaKcdth3a5hCaqhealhmadhAinaEaCydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiamIdbaiIdxMUdxaiamclfIdbaiIdzMUdzaiamcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaCclfhCaecxfheama3fhmaAcufgAmbxdkka5hmaqheadhCinaEamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaCcufgCmbkkdnaDTmbaEhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhCawcuaDcdtgYaDcFFFFi0Egicbyd1:jjjbHjjjjbbgeBdaawcoBd2awaicbyd1:jjjbHjjjjbbg3Bd8KaecFeaYz:rjjjbhxdnadTmbJbbjZJbbjZa8A:vaPceSEaoNgOaONh8AaKcdthPalheina8Aaec;81jjbalEgmIdwaEa5ydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndnaxaAcdtgifgmydbcuSmba3aifIdbaO9ETmekamaCBdba3aifaOUdbka5clfh5aqcxfhqaeaPfheadaCcefgC9hmbkkabaxaYz:qjjjb8AcrhikaicdthiinaiTmeaic98fgiawcxffydbcbyd:m:jjjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Ydidui99ducbhi8Jjjjjbca9Rglczfcwfcbyd11jjbBdbalcb8Pdj1jjb83izalcwfcbydN1jjbBdbalcb8Pd:m1jjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk9DeeuabcFeaicdtz:rjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcifc98GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcrfc94GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:q:jjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:q:jjjbfgdBd:q:jjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk:Iedbcjwk1eFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbeeeeeebebbeeebeebbbbebebbbbbbbbbbbbbbbbbbc1Dkxebbbdbbb:GNbb";
  var wasmpack = new Uint8Array([
    32,
    0,
    65,
    2,
    1,
    106,
    34,
    33,
    3,
    128,
    11,
    4,
    13,
    64,
    6,
    253,
    10,
    7,
    15,
    116,
    127,
    5,
    8,
    12,
    40,
    16,
    19,
    54,
    20,
    9,
    27,
    255,
    113,
    17,
    42,
    67,
    24,
    23,
    146,
    148,
    18,
    14,
    22,
    45,
    70,
    69,
    56,
    114,
    101,
    21,
    25,
    63,
    75,
    136,
    108,
    28,
    118,
    29,
    73,
    115
  ]);
  if (typeof WebAssembly !== "object") {
    return {
      supported: false
    };
  }
  var instance;
  var ready = WebAssembly.instantiate(unpack(wasm), {}).then(function(result) {
    instance = result.instance;
    instance.exports.__wasm_call_ctors();
  });
  function unpack(data) {
    var result = new Uint8Array(data.length);
    for (var i = 0; i < data.length; ++i) {
      var ch = data.charCodeAt(i);
      result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
    }
    var write = 0;
    for (var i = 0; i < data.length; ++i) {
      result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
    }
    return result.buffer.slice(0, write);
  }
  function assert(cond) {
    if (!cond) {
      throw new Error("Assertion failed");
    }
  }
  function bytes(view) {
    return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
  }
  function reorder(fun, indices, vertices) {
    var sbrk = instance.exports.sbrk;
    var ip = sbrk(indices.length * 4);
    var rp = sbrk(vertices * 4);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    var indices8 = bytes(indices);
    heap.set(indices8, ip);
    var unique = fun(rp, ip, indices.length, vertices);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var remap = new Uint32Array(vertices);
    new Uint8Array(remap.buffer).set(heap.subarray(rp, rp + vertices * 4));
    indices8.set(heap.subarray(ip, ip + indices.length * 4));
    sbrk(ip - sbrk(0));
    for (var i = 0; i < indices.length; ++i) indices[i] = remap[indices[i]];
    return [remap, unique];
  }
  function maxindex(source) {
    var result = 0;
    for (var i = 0; i < source.length; ++i) {
      var index = source[i];
      result = result < index ? index : result;
    }
    return result;
  }
  function simplify(fun, indices, index_count, vertex_positions, vertex_count, vertex_positions_stride, target_index_count, target_error, options) {
    var sbrk = instance.exports.sbrk;
    var te = sbrk(4);
    var ti = sbrk(index_count * 4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var si = sbrk(index_count * 4);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    heap.set(bytes(indices), si);
    var result = fun(ti, si, index_count, sp, vertex_count, vertex_positions_stride, target_index_count, target_error, options, te);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var target = new Uint32Array(result);
    bytes(target).set(heap.subarray(ti, ti + result * 4));
    var error = new Float32Array(1);
    bytes(error).set(heap.subarray(te, te + 4));
    sbrk(te - sbrk(0));
    return [target, error[0]];
  }
  function simplifyAttr(fun, indices, index_count, vertex_positions, vertex_count, vertex_positions_stride, vertex_attributes, vertex_attributes_stride, attribute_weights, vertex_lock, target_index_count, target_error, options) {
    var sbrk = instance.exports.sbrk;
    var te = sbrk(4);
    var ti = sbrk(index_count * 4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var sa = sbrk(vertex_count * vertex_attributes_stride);
    var sw = sbrk(attribute_weights.length * 4);
    var si = sbrk(index_count * 4);
    var vl = vertex_lock ? sbrk(vertex_count) : 0;
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    heap.set(bytes(vertex_attributes), sa);
    heap.set(bytes(attribute_weights), sw);
    heap.set(bytes(indices), si);
    if (vertex_lock) {
      heap.set(bytes(vertex_lock), vl);
    }
    var result = fun(
      ti,
      si,
      index_count,
      sp,
      vertex_count,
      vertex_positions_stride,
      sa,
      vertex_attributes_stride,
      sw,
      attribute_weights.length,
      vl,
      target_index_count,
      target_error,
      options,
      te
    );
    heap = new Uint8Array(instance.exports.memory.buffer);
    var target = new Uint32Array(result);
    bytes(target).set(heap.subarray(ti, ti + result * 4));
    var error = new Float32Array(1);
    bytes(error).set(heap.subarray(te, te + 4));
    sbrk(te - sbrk(0));
    return [target, error[0]];
  }
  function simplifyUpdate(fun, indices, index_count, vertex_positions, vertex_count, vertex_positions_stride, vertex_attributes, vertex_attributes_stride, attribute_weights, vertex_lock, target_index_count, target_error, options) {
    var sbrk = instance.exports.sbrk;
    var te = sbrk(4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var sa = sbrk(vertex_count * vertex_attributes_stride);
    var sw = sbrk(attribute_weights.length * 4);
    var si = sbrk(index_count * 4);
    var vl = vertex_lock ? sbrk(vertex_count) : 0;
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    heap.set(bytes(vertex_attributes), sa);
    heap.set(bytes(attribute_weights), sw);
    heap.set(bytes(indices), si);
    if (vertex_lock) {
      heap.set(bytes(vertex_lock), vl);
    }
    var result = fun(
      si,
      index_count,
      sp,
      vertex_count,
      vertex_positions_stride,
      sa,
      vertex_attributes_stride,
      sw,
      attribute_weights.length,
      vl,
      target_index_count,
      target_error,
      options,
      te
    );
    heap = new Uint8Array(instance.exports.memory.buffer);
    bytes(indices).set(heap.subarray(si, si + result * 4));
    bytes(vertex_positions).set(heap.subarray(sp, sp + vertex_count * vertex_positions_stride));
    bytes(vertex_attributes).set(heap.subarray(sa, sa + vertex_count * vertex_attributes_stride));
    var error = new Float32Array(1);
    bytes(error).set(heap.subarray(te, te + 4));
    sbrk(te - sbrk(0));
    return [result, error[0]];
  }
  function simplifyScale(fun, vertex_positions, vertex_count, vertex_positions_stride) {
    var sbrk = instance.exports.sbrk;
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    var result = fun(sp, vertex_count, vertex_positions_stride);
    sbrk(sp - sbrk(0));
    return result;
  }
  function simplifyPoints(fun, vertex_positions, vertex_count, vertex_positions_stride, vertex_colors, vertex_colors_stride, color_weight, target_vertex_count) {
    var sbrk = instance.exports.sbrk;
    var ti = sbrk(target_vertex_count * 4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var sc = sbrk(vertex_count * vertex_colors_stride);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    if (vertex_colors) {
      heap.set(bytes(vertex_colors), sc);
    }
    var result = fun(ti, sp, vertex_count, vertex_positions_stride, sc, vertex_colors_stride, color_weight, target_vertex_count);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var target = new Uint32Array(result);
    bytes(target).set(heap.subarray(ti, ti + result * 4));
    sbrk(ti - sbrk(0));
    return target;
  }
  function simplifySloppy(fun, indices, index_count, vertex_positions, vertex_count, vertex_positions_stride, vertex_lock, target_index_count, target_error) {
    var sbrk = instance.exports.sbrk;
    var te = sbrk(4);
    var ti = sbrk(index_count * 4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var si = sbrk(index_count * 4);
    var vl = vertex_lock ? sbrk(vertex_count) : 0;
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    heap.set(bytes(indices), si);
    if (vertex_lock) {
      heap.set(bytes(vertex_lock), vl);
    }
    var result = fun(ti, si, index_count, sp, vertex_count, vertex_positions_stride, vl, target_index_count, target_error, te);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var target = new Uint32Array(result);
    bytes(target).set(heap.subarray(ti, ti + result * 4));
    var error = new Float32Array(1);
    bytes(error).set(heap.subarray(te, te + 4));
    sbrk(te - sbrk(0));
    return [target, error[0]];
  }
  function simplifyPrune(fun, indices, index_count, vertex_positions, vertex_count, vertex_positions_stride, target_error) {
    var sbrk = instance.exports.sbrk;
    var ti = sbrk(index_count * 4);
    var sp = sbrk(vertex_count * vertex_positions_stride);
    var si = sbrk(index_count * 4);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), sp);
    heap.set(bytes(indices), si);
    var result = fun(ti, si, index_count, sp, vertex_count, vertex_positions_stride, target_error);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var target = new Uint32Array(result);
    bytes(target).set(heap.subarray(ti, ti + result * 4));
    sbrk(ti - sbrk(0));
    return target;
  }
  var simplifyOptions = {
    LockBorder: 1,
    Sparse: 2,
    ErrorAbsolute: 4,
    Prune: 8,
    Regularize: 16,
    Permissive: 32,
    _InternalDebug: 1 << 30
    // internal, don't use!
  };
  return {
    ready,
    supported: true,
    compactMesh: function(indices) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return reorder(instance.exports.meshopt_optimizeVertexFetchRemap, indices32, maxindex(indices) + 1);
    },
    simplify: function(indices, vertex_positions, vertex_positions_stride, target_index_count, target_error, flags) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(target_index_count >= 0 && target_index_count <= indices.length);
      assert(target_index_count % 3 == 0);
      assert(target_error >= 0);
      var options = 0;
      for (var i = 0; i < (flags ? flags.length : 0); ++i) {
        assert(flags[i] in simplifyOptions);
        options |= simplifyOptions[flags[i]];
      }
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      var result = simplify(
        instance.exports.meshopt_simplify,
        indices32,
        indices.length,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        target_index_count,
        target_error,
        options
      );
      result[0] = indices instanceof Uint32Array ? result[0] : new indices.constructor(result[0]);
      return result;
    },
    simplifyWithAttributes: function(indices, vertex_positions, vertex_positions_stride, vertex_attributes, vertex_attributes_stride, attribute_weights, vertex_lock, target_index_count, target_error, flags) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(vertex_attributes instanceof Float32Array);
      assert(vertex_attributes.length == vertex_attributes_stride * (vertex_positions.length / vertex_positions_stride));
      assert(vertex_attributes_stride >= 0);
      assert(vertex_lock == null || vertex_lock instanceof Uint8Array);
      assert(vertex_lock == null || vertex_lock.length == vertex_positions.length / vertex_positions_stride);
      assert(target_index_count >= 0 && target_index_count <= indices.length);
      assert(target_index_count % 3 == 0);
      assert(target_error >= 0);
      assert(Array.isArray(attribute_weights));
      assert(vertex_attributes_stride >= attribute_weights.length);
      assert(attribute_weights.length <= 32);
      for (var i = 0; i < attribute_weights.length; ++i) {
        assert(attribute_weights[i] >= 0);
      }
      var options = 0;
      for (var i = 0; i < (flags ? flags.length : 0); ++i) {
        assert(flags[i] in simplifyOptions);
        options |= simplifyOptions[flags[i]];
      }
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      var result = simplifyAttr(
        instance.exports.meshopt_simplifyWithAttributes,
        indices32,
        indices.length,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        vertex_attributes,
        vertex_attributes_stride * 4,
        new Float32Array(attribute_weights),
        vertex_lock,
        target_index_count,
        target_error,
        options
      );
      result[0] = indices instanceof Uint32Array ? result[0] : new indices.constructor(result[0]);
      return result;
    },
    simplifyWithUpdate: function(indices, vertex_positions, vertex_positions_stride, vertex_attributes, vertex_attributes_stride, attribute_weights, vertex_lock, target_index_count, target_error, flags) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(vertex_attributes instanceof Float32Array);
      assert(vertex_attributes.length == vertex_attributes_stride * (vertex_positions.length / vertex_positions_stride));
      assert(vertex_attributes_stride >= 0);
      assert(vertex_lock == null || vertex_lock instanceof Uint8Array);
      assert(vertex_lock == null || vertex_lock.length == vertex_positions.length / vertex_positions_stride);
      assert(target_index_count >= 0 && target_index_count <= indices.length);
      assert(target_index_count % 3 == 0);
      assert(target_error >= 0);
      assert(Array.isArray(attribute_weights));
      assert(vertex_attributes_stride >= attribute_weights.length);
      assert(attribute_weights.length <= 32);
      for (var i = 0; i < attribute_weights.length; ++i) {
        assert(attribute_weights[i] >= 0);
      }
      var options = 0;
      for (var i = 0; i < (flags ? flags.length : 0); ++i) {
        assert(flags[i] in simplifyOptions);
        options |= simplifyOptions[flags[i]];
      }
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      var result = simplifyUpdate(
        instance.exports.meshopt_simplifyWithUpdate,
        indices32,
        indices.length,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        vertex_attributes,
        vertex_attributes_stride * 4,
        new Float32Array(attribute_weights),
        vertex_lock,
        target_index_count,
        target_error,
        options
      );
      if (indices !== indices32) {
        for (var i = 0; i < result[0]; ++i) {
          indices[i] = indices32[i];
        }
      }
      return result;
    },
    getScale: function(vertex_positions, vertex_positions_stride) {
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      return simplifyScale(
        instance.exports.meshopt_simplifyScale,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4
      );
    },
    simplifyPoints: function(vertex_positions, vertex_positions_stride, target_vertex_count, vertex_colors, vertex_colors_stride, color_weight) {
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(target_vertex_count >= 0 && target_vertex_count <= vertex_positions.length / vertex_positions_stride);
      if (vertex_colors) {
        assert(vertex_colors instanceof Float32Array);
        assert(vertex_colors.length % vertex_colors_stride == 0);
        assert(vertex_colors_stride >= 3);
        assert(vertex_positions.length / vertex_positions_stride == vertex_colors.length / vertex_colors_stride);
        return simplifyPoints(
          instance.exports.meshopt_simplifyPoints,
          vertex_positions,
          vertex_positions.length / vertex_positions_stride,
          vertex_positions_stride * 4,
          vertex_colors,
          vertex_colors_stride * 4,
          color_weight,
          target_vertex_count
        );
      } else {
        return simplifyPoints(
          instance.exports.meshopt_simplifyPoints,
          vertex_positions,
          vertex_positions.length / vertex_positions_stride,
          vertex_positions_stride * 4,
          void 0,
          0,
          0,
          target_vertex_count
        );
      }
    },
    simplifySloppy: function(indices, vertex_positions, vertex_positions_stride, vertex_lock, target_index_count, target_error) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(vertex_lock == null || vertex_lock instanceof Uint8Array);
      assert(vertex_lock == null || vertex_lock.length == vertex_positions.length / vertex_positions_stride);
      assert(target_index_count >= 0 && target_index_count <= indices.length);
      assert(target_index_count % 3 == 0);
      assert(target_error >= 0);
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      var result = simplifySloppy(
        instance.exports.meshopt_simplifySloppy,
        indices32,
        indices.length,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        vertex_lock,
        target_index_count,
        target_error
      );
      result[0] = indices instanceof Uint32Array ? result[0] : new indices.constructor(result[0]);
      return result;
    },
    simplifyPrune: function(indices, vertex_positions, vertex_positions_stride, target_error) {
      assert(
        indices instanceof Uint32Array || indices instanceof Int32Array || indices instanceof Uint16Array || indices instanceof Int16Array
      );
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(target_error >= 0);
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      var result = simplifyPrune(
        instance.exports.meshopt_simplifyPrune,
        indices32,
        indices.length,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        target_error
      );
      result = indices instanceof Uint32Array ? result : new indices.constructor(result);
      return result;
    }
  };
})();

// node_modules/meshoptimizer/meshopt_clusterizer.module.js
var MeshoptClusterizer = (function() {
  var wasm = "b9H79TebbbeVx9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gvuuuuueu9Gwuuuuuuuub9Gxuuuuuuuuuuuueu9Gkuuuuuuuuuu99eu9Gouuuuuub9Gruuuuuuub9GluuuubiAOdilvorwDqqDkbiibeilve9Weiiviebeoweuec;G:Odkr;qeDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeX9TW79O9V9Wt9F9I919P29K9nW79O2Wt7bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7br39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bDE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bqL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbkl79IV9RbxDwebcekdszq:x9DOdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:w8KDPue99eux99dui99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:ojjjb8Adndnalcb9imbaoal9nmbamcuaocdtaocFFFFi0Egscbyd;u1jjbHjjjjbbgzBd:CwamceBd;8wamascbyd;u1jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;u1jjbHjjjjbbgOBd:KwamciBd;8waihsalhAinazasydbcdtfcbBdbasclfhsaAcufgAmbkaihsalhAinazasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkaihsalhCcbhXindnazasydbcdtgQfgAydbcb9imbaHaQfaXBdbaAaAydbgQcjjjj94VBdbaQaXfhXkasclfhsaCcufgCmbkalci9UhLdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhXaHaAydbcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaXcdtfgXaXydbgXcefBdbaOaXcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaihsalhAindnazasydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaHaCfgCaCydbaQ9RBdbkasclfhsaAcufgAmbxdkkamcuaocdtgsaocFFFFi0EgAcbyd;u1jjbHjjjjbbgzBd:CwamceBd;8wamaAcbyd;u1jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;u1jjbHjjjjbbgOBd:KwamciBd;8wazcbasz:ojjjbhXalci9UhLaihsalhAinaXasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkdnaoTmbcbhsaHhAaXhCaohQinaAasBdbaAclfhAaCydbasfhsaCclfhCaQcufgQmbkkdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhQaHaAydbcdtfgKaKydbgKcefBdbaOaKcdtfasBdbaHaQcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaoTmbcbhsaohAinaHasfgCaCydbaXasfydb9RBdbasclfhsaAcufgAmbkkamaLcbyd;u1jjbHjjjjbbgsBd:OwamclBd;8wascbaLz:ojjjbhYamcuaLcK2alcjjjjd0Ecbyd;u1jjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihAa8AhsaLhrJbbbbh5inavaAclfydbaK2cdtfgCIdlh8EavaAydbaK2cdtfgXIdlhEavaAcwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgasaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbasclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyascxfa8EaE:tg8Eagah:tggNa8FaE:tg8Faaah:tgaN:tgEJbbbbJbbjZa8Ja8K:tg8Ja8FNa8La8K:tg8Ka8EN:tghahNaEaENaaa8KNaga8JN:tgEaENMM:rg8K:va8KJbbbb9BEg8ENUdbasczfaEa8ENUdbascCfaha8ENUdbascwfa8Maya8NMMJbbnn:vUdba5a8KMh5aAcxfhAascKfhsarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;u1jjbHjjjjbbgCBd:WwamcoBd;8waEaq:ZNhEdna3mbcbhsaChAinaAasBdbaAclfhAaLascefgs9hmbkkaE:rhhcuh8PamcuaLcltalcFFFFd0Ecbyd;u1jjbHjjjjbbgIBd:0wamcrBd;8wcbaIa8AaCaLz:djjjb8AJFFuuhyJFFuuh8RJFFuuh8Sdnalci6gXmbJFFuuh8Sa8AhsaLhAJFFuuh8RJFFuuhyinascwfIdbgEayayaE9EEhyasclfIdbgEa8Ra8RaE9EEh8RasIdbgEa8Sa8SaE9EEh8SascKfhsaAcufgAmbkkahJbbbZNhgamaocetgscuaocu9kEcbyd;u1jjbHjjjjbbgABd:4waAcFeasz:ojjjbhCdnaXmbcbhAJFFuuhEa8Ahscuh8PinascwfIdbay:tghahNasIdba8S:tghahNasclfIdba8R:tghahNMM:rghaEa8PcuSahaE9DVgXEhEaAa8PaXEh8PascKfhsaLaAcefgA9hmbkkamczfcbcjwz:ojjjb8Aamcwf9cb83ibam9cb83ibagaxNhRJbbjZak:th8Ncbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YJbbbbh8ZJbbbbh80cbh81cbhPinJbbbbhEdna8UTmbJbbjZa8U:Z:vhEkJbbbbhhdna80a80Na8Ya8YNa8Za8ZNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8XaENh5a8WaENh8Fa8VaENhaa8PhQdndndndndna8UaPVTmbamydwgBTmea80ahNh8Ja8ZahNh8La8YahNh8Maeamydbcdtfh83cbh3JFFuuhEcvhXcuhQindnaza83a3cdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAindndnaCaiaAydbgKcx2fgsclfydbgrcetf8Vebcs4aCasydbgLcetf8Vebcs4faCascwfydbglcetf8Vebcs4fgombcbhsxekcehsazaLcdtfydbgLceSmbcehsazarcdtfydbgrceSmbcehsazalcdtfydbglceSmbdnarcdSaLcdSfalcdSfcd6mbaocefhsxekaocdfhskdnasaX9kmba8AaKcK2fgLIdwa5:thhaLIdla8F:th8KaLIdbaa:th8EdndnakJbbbb9DTmba8E:lg8Ea8K:lg8Ka8Ea8K9EEg8Kah:lgha8Kah9EEag:vJbbjZMhhxekahahNa8Ea8ENa8Ka8KNMM:rag:va8NNJbbjZMJ9VO:d86JbbjZaLIdCa8JNaLIdxa8MNa8LaLIdzNMMakN:tghahJ9VO:d869DENhhkaKaQasaX6ahaE9DVgLEhQasaXaLEhXahaEaLEhEkaAclfhAavcufgvmbkka3cefg3aB9hmbkkaQcu9hmekama5Ud:ODama8FUd:KDamaaUd:GDamcuBd:qDamcFFF;7rBdjDaIcba8AaYamc:GDfakJbbbb9Damc:qDfamcjDfz:ejjjbamyd:qDhQdndnaxJbbbb9ETmba8UaD6mbaQcuSmeceh3amIdjDaR9EmixdkaQcu9hmekdna8UTmbdnamydlgza8Uci2fgsciGTmbadasfcba8Uazcu7fciGcefz:ojjjb8AkabaPcltfgzam8Pib83dbazcwfamcwf8Pib83dbaPcefhPkc3hzinazc98Smvamc:Cwfazfydbcbyd;y1jjbH:bjjjbbazc98fhzxbkkcbh3a8Uaq9pmbamydwaCaiaQcx2fgsydbcetf8Vebcs4aCascwfydbcetf8Vebcs4faCasclfydbcetf8Vebcs4ffaw9nmekcbhscbhAdna81TmbcbhAamczfhXinamczfaAcdtfaXydbgLBdbaXclfhXaAaYaLfRbbTfhAa81cufg81mbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDaAc;8eaAclfc:bd6Eh81inamcjDfasfcFFF;7rBdbasclfgscz9hmbka81cdthBdnalTmbaeaXcdtfhocbhrindnazaoarcdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAcuhLcuhsinazaiaAydbgKcx2fgXclfydbcdtfydbazaXydbcdtfydbfazaXcwfydbcdtfydbfgXasaXas6gXEhsaKaLaXEhLaAclfhAavcufgvmbkaLcuSmba8AaLcK2fgAIdway:tgEaENaAIdba8S:tgEaENaAIdla8R:tgEaENMM:rhEcbhAindndnasamc:qDfaAfgvydbgX6mbasaX9hmeaEamcjDfaAfIdb9FTmekavasBdbamc:GDfaAfaLBdbamcjDfaAfaEUdbxdkaAclfgAcz9hmbkkarcefgral9hmbkkamczfaBfhLcbhscbhAindnamc:GDfasfydbgXcuSmbaLaAcdtfaXBdbaAcefhAkasclfgscz9hmbkaAa81fg81TmbJFFuuhhcuhKamczfhsa81hvcuhLina8AasydbgXcK2fgAIdway:tgEaENaAIdba8S:tgEaENaAIdla8R:tgEaENMM:rhEdndnazaiaXcx2fgAclfydbcdtfydbazaAydbcdtfydbfazaAcwfydbcdtfydbfgAaL6mbaAaL9hmeaEah9DTmekaEhhaAhLaXhKkasclfhsavcufgvmbkaKcuSmbaKhQkdnamaiaQcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YJbbbbh8ZJbbbbh80kcbhXinaOaHaraXcdtfydbcdtgAfydbcdtfgKhsazaAfgvydbgLhAdnaLTmbdninasydbaQSmeasclfhsaAcufgATmdxbkkasaKaLcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaQcK2fgsIdbhEasIdlhhasIdwh8KasIdxh8EasIdzh5asIdCh8FaYaQfce86bba80a8FMh80a8Za5Mh8Za8Ya8EMh8Ya8Xa8KMh8Xa8WahMh8Wa8VaEMh8Vamydxh8Uxbkkamc:WDf8KjjjjbaPk;Vvivuv99lu8Jjjjjbca9Rgv8Kjjjjbdndnalcw0mbaiydbhoaeabcitfgralcdtcufBdlaraoBdbdnalcd6mbaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkkalabfhrxekcbhDavczfcwfcbBdbav9cb83izavcwfcbBdbav9cb83ibJbbjZhqJbbjZhkinadaiaDcdtfydbcK2fhwcbhrinavczfarfgoawarfIdbgxaoIdbgm:tgPakNamMgmUdbavarfgoaPaxam:tNaoIdbMUdbarclfgrcx9hmbkJbbjZaqJbbjZMgq:vhkaDcefgDal9hmbkcbhoadcbcecdavIdlgxavIdwgm9GEgravIdbgPam9GEaraPax9GEgscdtgrfhzavczfarfIdbhxaihralhwinaiaocdtfgDydbhHaDarydbgOBdbaraHBdbarclfhraoazaOcK2fIdbax9Dfhoawcufgwmbkaeabcitfhrdndnaocv6mbaoalc98f6mekaraiydbBdbaralcdtcufBdlaiclfhoalcufhwarcxfhrinaoydbhDarcuBdbarc98faDBdbarcwfhraoclfhoawcufgwmbkalabfhrxekaraxUdbararydlc98GasVBdlabcefaeadaiaoz:djjjbhwararydlciGawabcu7fcdtVBdlawaeadaiaocdtfalao9Rz:djjjbhrkavcaf8Kjjjjbark:;idiud99dndnabaecitfgwydlgDciGgqciSmbinabcbaDcd4gDalaqcdtfIdbawIdb:tgkJbbbb9FEgwaecefgefadaialavaoarz:ejjjbak:larIdb9FTmdabawaD7aefgecitfgwydlgDciGgqci9hmbkkabaecitfgeclfhbdnavmbcuhwindnaiaeydbgDfRbbmbadaDcK2fgqIdwalIdw:tgkakNaqIdbalIdb:tgkakNaqIdlalIdl:tgkakNMM:rgkarIdb9DTmbarakUdbaoaDBdbkaecwfheawcefgwabydbcd46mbxdkkcuhwindnaiaeydbgDfRbbmbadaDcK2fgqIdbalIdb:t:lgkaqIdlalIdl:t:lgxakax9EEgkaqIdwalIdw:t:lgxakax9EEgkarIdb9DTmbarakUdbaoaDBdbkaecwfheawcefgwabydbcd46mbkkk;llevudnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0abydxaq9pVakVgDce9hmbavawcltfgxab8Pdb83dbaxcwfabcwfgx8Pdb83dbdnaxydbgqTmbaoabydbcdtfhxaqhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkdnabydxglci2gsabydlgxfgkciGTmbarakfcbalaxcu7fciGcefz:ojjjb8Aabydxci2hsabydlhxabydwhqkab9cb83dwababydbaqfBdbabascifc98GaxfBdlaP8Vebhscbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk8LbabaeadaialavaoarawaDaDaqJbbbbz:cjjjbk;Nkovud99euv99eul998Jjjjjbc:W;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:W:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaoc8Wfawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeaocbBd8Sao9cb83iKao9cb83izaoczfaoc8Wfawci2cxaoc8Sfcbcrz1jjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:W:qefawcxaoc8Sfcbciz1jjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:W:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:W:qefheaoc8WfhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabaxUd8KabasUdaabazUd3abaCaxaPN:tUdKabaXasaPN:tUdCabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabae86b8UdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabav86bRdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:W;aef8Kjjjjbk;Iwwvul99iud99eue99eul998Jjjjjbcje9Rgr8Kjjjjbavcd4hwaicd4hDdndnaoTmbarc;abfcbaocdtgvz:ojjjb8Aarc;Gbfcbavz:ojjjb8AarhvarcafhiaohqinavcFFF97BdbaicFFF;7rBdbaiclfhiavclfhvaqcufgqmbkdnadTmbcbhkinaeakaD2cdtfgvIdwhxavIdlhmavIdbhPalakaw2cdtfIdbhsarc;abfhzarhiarc;GbfhHarcafhqcj1jjbhvaohOinasavcwfIdbaxNavIdbaPNavclfIdbamNMMgAMhCakhXdnaAas:tgAaqIdbgQ9DgLmbaHydbhXkaHaXBdbakhXdnaCaiIdbgK9EmbazydbhXaKhCkazaXBdbaiaCUdbaqaAaQaLEUdbavcxfhvaqclfhqaHclfhHaiclfhiazclfhzaOcufgOmbkakcefgkad9hmbkkadThkJbbbbhCcbhXarc;abfhvarc;Gbfhicbhqinalavydbgzaw2cdtfIdbalaiydbgHaw2cdtfIdbaeazaD2cdtfgzIdwaeaHaD2cdtfgHIdw:tgsasNazIdbaHIdb:tgsasNazIdlaHIdl:tgsasNMM:rMMgsaCasaC9EgzEhCaqaXazEhXaiclfhiavclfhvaoaqcefgq9hmbkaCJbbbZNhKxekadThkcbhXJbbbbhKkJbbbbhCdnaearc;abfaXcdtgifydbgqaD2cdtfgvIdwaearc;GbfaifydbgzaD2cdtfgiIdwgm:tgsasNavIdbaiIdbgY:tgAaANavIdlaiIdlgP:tgQaQNMM:rgxJbbbb9ETmbaxalaqaw2cdtfIdbMalazaw2cdtfIdb:taxaxM:vhCkasaCNamMhmaQaCNaPMhPaAaCNaYMhYdnakmbaDcdthvawcdthiindnalIdbg8AaecwfIdbam:tgCaCNaeIdbaY:tgsasNaeclfIdbaP:tgAaANMM:rgQMgEaK9ETmbJbbbbhxdnaQJbbbb9ETmbaEaK:taQaQM:vhxkaxaCNamMhmaxaANaPMhPaxasNaYMhYa8AaKaQMMJbbbZNhKkaeavfhealaifhladcufgdmbkkabaKUdxabamUdwabaPUdlabaYUdbarcjef8Kjjjjbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz:hjjjbarcj8Wf8Kjjjjbk:Reeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrz1jjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk:3lequ8JjjjjbcjP9Rgl8Kjjjjbcbhvalcjxfcbaiz:ojjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjxfaDcefRbbfRbb9RcFeGci6aoalcjxfaDRbbfRbb9RcFeGci6faoalcjxfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2z:rjjjb8Aakalcjxffaocefgo86bbaxalcjxffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjxffao86bbarcifhravcefgvad9hmbkalcFeaicetz:ojjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkcetfgw8UebgDcu9kmbawax87ebaocjlfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjlfaDz:njjjb8AalcjPf8Kjjjjbk9teiucbcbyd;C1jjbgeabcifc98GfgbBd;C1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;C1jjbgeabcrfc94GfgbBd;C1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd;C1jjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd;C1jjbfgdBd;C1jjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkk9Tdbcjwk9ubbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;uwkxebbbdbbb9GNbb";
  var wasmpack = new Uint8Array([
    32,
    0,
    65,
    2,
    1,
    106,
    34,
    33,
    3,
    128,
    11,
    4,
    13,
    64,
    6,
    253,
    10,
    7,
    15,
    116,
    127,
    5,
    8,
    12,
    40,
    16,
    19,
    54,
    20,
    9,
    27,
    255,
    113,
    17,
    42,
    67,
    24,
    23,
    146,
    148,
    18,
    14,
    22,
    45,
    70,
    69,
    56,
    114,
    101,
    21,
    25,
    63,
    75,
    136,
    108,
    28,
    118,
    29,
    73,
    115
  ]);
  if (typeof WebAssembly !== "object") {
    return {
      supported: false
    };
  }
  var instance;
  var ready = WebAssembly.instantiate(unpack(wasm), {}).then(function(result) {
    instance = result.instance;
    instance.exports.__wasm_call_ctors();
  });
  function unpack(data) {
    var result = new Uint8Array(data.length);
    for (var i = 0; i < data.length; ++i) {
      var ch = data.charCodeAt(i);
      result[i] = ch > 96 ? ch - 97 : ch > 64 ? ch - 39 : ch + 4;
    }
    var write = 0;
    for (var i = 0; i < data.length; ++i) {
      result[write++] = result[i] < 60 ? wasmpack[result[i]] : (result[i] - 60) * 64 + result[++i];
    }
    return result.buffer.slice(0, write);
  }
  function assert(cond) {
    if (!cond) {
      throw new Error("Assertion failed");
    }
  }
  function bytes(view) {
    return new Uint8Array(view.buffer, view.byteOffset, view.byteLength);
  }
  var BOUNDS_SIZE = 48;
  var MESHLET_SIZE = 16;
  function extractMeshlet(buffers, index) {
    var vertex_offset = buffers.meshlets[index * 4 + 0];
    var triangle_offset = buffers.meshlets[index * 4 + 1];
    var vertex_count = buffers.meshlets[index * 4 + 2];
    var triangle_count = buffers.meshlets[index * 4 + 3];
    return {
      vertices: buffers.vertices.subarray(vertex_offset, vertex_offset + vertex_count),
      triangles: buffers.triangles.subarray(triangle_offset, triangle_offset + triangle_count * 3)
    };
  }
  function buildMeshlets(indices, vertex_positions, vertex_count, vertex_positions_stride, max_vertices, max_triangles, cone_weight) {
    var sbrk = instance.exports.sbrk;
    var max_meshlets = instance.exports.meshopt_buildMeshletsBound(indices.length, max_vertices, max_triangles);
    var meshletsp = sbrk(max_meshlets * MESHLET_SIZE);
    var meshlet_verticesp = sbrk(max_meshlets * max_vertices * 4);
    var meshlet_trianglesp = sbrk(max_meshlets * max_triangles * 3);
    var indicesp = sbrk(indices.byteLength);
    var verticesp = sbrk(vertex_positions.byteLength);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(indices), indicesp);
    heap.set(bytes(vertex_positions), verticesp);
    var count = instance.exports.meshopt_buildMeshlets(
      meshletsp,
      meshlet_verticesp,
      meshlet_trianglesp,
      indicesp,
      indices.length,
      verticesp,
      vertex_count,
      vertex_positions_stride,
      max_vertices,
      max_triangles,
      cone_weight
    );
    heap = new Uint8Array(instance.exports.memory.buffer);
    var meshletBytes = heap.subarray(meshletsp, meshletsp + count * MESHLET_SIZE);
    var meshlets = new Uint32Array(meshletBytes.buffer, meshletBytes.byteOffset, meshletBytes.byteLength / 4).slice();
    for (var i = 0; i < count; ++i) {
      var vertex_offset = meshlets[i * 4 + 0];
      var triangle_offset = meshlets[i * 4 + 1];
      var vertex_count = meshlets[i * 4 + 2];
      var triangle_count = meshlets[i * 4 + 3];
      instance.exports.meshopt_optimizeMeshlet(
        meshlet_verticesp + vertex_offset * 4,
        meshlet_trianglesp + triangle_offset,
        triangle_count,
        vertex_count
      );
    }
    var last_vertex_offset = meshlets[(count - 1) * 4 + 0];
    var last_triangle_offset = meshlets[(count - 1) * 4 + 1];
    var last_vertex_count = meshlets[(count - 1) * 4 + 2];
    var last_triangle_count = meshlets[(count - 1) * 4 + 3];
    var used_vertices = last_vertex_offset + last_vertex_count;
    var used_triangles = last_triangle_offset + (last_triangle_count * 3 + 3 & ~3);
    var result = {
      meshlets,
      vertices: new Uint32Array(heap.buffer, meshlet_verticesp, used_vertices).slice(),
      triangles: new Uint8Array(heap.buffer, meshlet_trianglesp, used_triangles * 3).slice(),
      meshletCount: count
    };
    sbrk(meshletsp - sbrk(0));
    return result;
  }
  function extractBounds(boundsp) {
    var bounds_floats = new Float32Array(instance.exports.memory.buffer, boundsp, BOUNDS_SIZE / 4);
    return {
      centerX: bounds_floats[0],
      centerY: bounds_floats[1],
      centerZ: bounds_floats[2],
      radius: bounds_floats[3],
      coneApexX: bounds_floats[4],
      coneApexY: bounds_floats[5],
      coneApexZ: bounds_floats[6],
      coneAxisX: bounds_floats[7],
      coneAxisY: bounds_floats[8],
      coneAxisZ: bounds_floats[9],
      coneCutoff: bounds_floats[10]
    };
  }
  function computeMeshletBounds(buffers, vertex_positions, vertex_count, vertex_positions_stride) {
    var sbrk = instance.exports.sbrk;
    var results = [];
    var verticesp = sbrk(vertex_positions.byteLength);
    var meshlet_verticesp = sbrk(buffers.vertices.byteLength);
    var meshlet_trianglesp = sbrk(buffers.triangles.byteLength);
    var resultp = sbrk(BOUNDS_SIZE);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(vertex_positions), verticesp);
    heap.set(bytes(buffers.vertices), meshlet_verticesp);
    heap.set(bytes(buffers.triangles), meshlet_trianglesp);
    for (var i = 0; i < buffers.meshletCount; ++i) {
      var vertex_offset = buffers.meshlets[i * 4 + 0];
      var triangle_offset = buffers.meshlets[i * 4 + 0 + 1];
      var triangle_count = buffers.meshlets[i * 4 + 0 + 3];
      instance.exports.meshopt_computeMeshletBounds(
        resultp,
        meshlet_verticesp + vertex_offset * 4,
        meshlet_trianglesp + triangle_offset,
        triangle_count,
        verticesp,
        vertex_count,
        vertex_positions_stride
      );
      results.push(extractBounds(resultp));
    }
    sbrk(verticesp - sbrk(0));
    return results;
  }
  function computeClusterBounds(indices, vertex_positions, vertex_count, vertex_positions_stride) {
    var sbrk = instance.exports.sbrk;
    var resultp = sbrk(BOUNDS_SIZE);
    var indicesp = sbrk(indices.byteLength);
    var verticesp = sbrk(vertex_positions.byteLength);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(indices), indicesp);
    heap.set(bytes(vertex_positions), verticesp);
    instance.exports.meshopt_computeClusterBounds(resultp, indicesp, indices.length, verticesp, vertex_count, vertex_positions_stride);
    var result = extractBounds(resultp);
    sbrk(resultp - sbrk(0));
    return result;
  }
  function computeSphereBounds(positions, count, positions_stride, radii, radii_stride) {
    var sbrk = instance.exports.sbrk;
    var resultp = sbrk(BOUNDS_SIZE);
    var positionsp = sbrk(positions.byteLength);
    var radiip = radii ? sbrk(radii.byteLength) : 0;
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(positions), positionsp);
    if (radii) {
      heap.set(bytes(radii), radiip);
    }
    instance.exports.meshopt_computeSphereBounds(resultp, positionsp, count, positions_stride, radiip, radii ? radii_stride : 0);
    var result = extractBounds(resultp);
    sbrk(resultp - sbrk(0));
    return result;
  }
  return {
    ready,
    supported: true,
    buildMeshlets: function(indices, vertex_positions, vertex_positions_stride, max_vertices, max_triangles, cone_weight) {
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(max_vertices <= 256 || max_vertices > 0);
      assert(max_triangles <= 512);
      assert(max_triangles % 4 == 0);
      cone_weight = cone_weight || 0;
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return buildMeshlets(
        indices32,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        max_vertices,
        max_triangles,
        cone_weight
      );
    },
    extractMeshlet: function(buffers, index) {
      assert(index >= 0 && index < buffers.meshletCount);
      return extractMeshlet(buffers, index);
    },
    computeClusterBounds: function(indices, vertex_positions, vertex_positions_stride) {
      assert(indices.length % 3 == 0);
      assert(indices.length / 3 <= 512);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return computeClusterBounds(indices32, vertex_positions, vertex_positions.length / vertex_positions_stride, vertex_positions_stride * 4);
    },
    computeMeshletBounds: function(buffers, vertex_positions, vertex_positions_stride) {
      assert(buffers.meshletCount != 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      return computeMeshletBounds(buffers, vertex_positions, vertex_positions.length / vertex_positions_stride, vertex_positions_stride * 4);
    },
    computeSphereBounds: function(positions, positions_stride, radii, radii_stride) {
      assert(positions instanceof Float32Array);
      assert(positions.length % positions_stride == 0);
      assert(positions_stride >= 3);
      assert(!radii || radii instanceof Float32Array);
      assert(!radii || radii.length % radii_stride == 0);
      assert(!radii || radii_stride >= 1);
      assert(!radii || positions.length / positions_stride == radii.length / radii_stride);
      radii_stride = radii_stride || 0;
      return computeSphereBounds(positions, positions.length / positions_stride, positions_stride * 4, radii, radii_stride * 4);
    }
  };
})();

// packages/engine/Source/Scene/Axis.js
var Axis = {
  /**
   * Denotes the x-axis.
   *
   * @type {number}
   * @constant
   */
  X: 0,
  /**
   * Denotes the y-axis.
   *
   * @type {number}
   * @constant
   */
  Y: 1,
  /**
   * Denotes the z-axis.
   *
   * @type {number}
   * @constant
   */
  Z: 2
};
Axis.Y_UP_TO_Z_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about PI/2 around the X-axis
  Matrix3_default.fromArray([1, 0, 0, 0, 0, 1, 0, -1, 0])
);
Axis.Z_UP_TO_Y_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about -PI/2 around the X-axis
  Matrix3_default.fromArray([1, 0, 0, 0, 0, -1, 0, 1, 0])
);
Axis.X_UP_TO_Z_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about -PI/2 around the Y-axis
  Matrix3_default.fromArray([0, 0, 1, 0, 1, 0, -1, 0, 0])
);
Axis.Z_UP_TO_X_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about PI/2 around the Y-axis
  Matrix3_default.fromArray([0, 0, -1, 0, 1, 0, 1, 0, 0])
);
Axis.X_UP_TO_Y_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about PI/2 around the Z-axis
  Matrix3_default.fromArray([0, 1, 0, -1, 0, 0, 0, 0, 1])
);
Axis.Y_UP_TO_X_UP = Matrix4_default.fromRotationTranslation(
  // Rotation about -PI/2 around the Z-axis
  Matrix3_default.fromArray([0, -1, 0, 1, 0, 0, 0, 0, 1])
);
Axis.fromName = function(name) {
  Check_default.typeOf.string("name", name);
  return Axis[name];
};
var Axis_default = Object.freeze(Axis);

// packages/engine/Source/Core/TerrainMesh.js
function TerrainMesh(center, vertices, indices, indexCountWithoutSkirts, vertexCountWithoutSkirts, minimumHeight, maximumHeight, boundingSphere3D, occludeePointInScaledSpace, vertexStride, orientedBoundingBox, encoding, westIndicesSouthToNorth, southIndicesEastToWest, eastIndicesNorthToSouth, northIndicesWestToEast) {
  this.center = center;
  this.vertices = vertices;
  this.stride = vertexStride ?? 6;
  this.indices = indices;
  this.indexCountWithoutSkirts = indexCountWithoutSkirts;
  this.vertexCountWithoutSkirts = vertexCountWithoutSkirts;
  this.minimumHeight = minimumHeight;
  this.maximumHeight = maximumHeight;
  this.boundingSphere3D = boundingSphere3D;
  this.occludeePointInScaledSpace = occludeePointInScaledSpace;
  this.orientedBoundingBox = orientedBoundingBox;
  this.encoding = encoding;
  this.westIndicesSouthToNorth = westIndicesSouthToNorth;
  this.southIndicesEastToWest = southIndicesEastToWest;
  this.eastIndicesNorthToSouth = eastIndicesNorthToSouth;
  this.northIndicesWestToEast = northIndicesWestToEast;
}
var TerrainMesh_default = TerrainMesh;

// packages/engine/Source/Core/Cesium3DTilesTerrainGeometryProcessor.js
var Cesium3DTilesTerrainGeometryProcessor = {};
var scratchGltfInfo = {
  positions: void 0,
  normals: void 0,
  indices: void 0,
  edgeIndicesWest: void 0,
  edgeIndicesSouth: void 0,
  edgeIndicesEast: void 0,
  edgeIndicesNorth: void 0
};
var scratchCenterCartographic = new Cartographic_default();
var scratchCenterCartesian = new Cartesian3_default();
var scratchEnuToEcef = new Matrix4_default();
var scratchEcefToEnu = new Matrix4_default();
var scratchTilesetTransform = new Matrix4_default();
var scratchMinimumPositionENU = new Cartesian3_default();
var scratchMaximumPositionENU = new Cartesian3_default();
var scratchPosLocal = new Cartesian3_default();
var scratchPosEcef = new Cartesian3_default();
var scratchCartographic = new Cartographic_default();
var scratchUV = new Cartesian2_default();
var scratchNormal = new Cartesian3_default();
var scratchNormalOct = new Cartesian2_default();
var scratchGeodeticSurfaceNormal = new Cartesian3_default();
var scratchPosEnu = new Cartesian3_default();
var sortedEdgeCompare = function(a, b) {
  return a - b;
};
Cesium3DTilesTerrainGeometryProcessor.createMesh = async function(options) {
  options = options ?? Frozen_default.EMPTY_OBJECT;
  const {
    exaggeration = 1,
    exaggerationRelativeHeight = 0,
    hasVertexNormals,
    hasWebMercatorT,
    gltf,
    minimumHeight,
    maximumHeight,
    skirtHeight
  } = options;
  Check_default.typeOf.object("options.ellipsoid", options.ellipsoid);
  Check_default.typeOf.object("options.rectangle", options.rectangle);
  Check_default.typeOf.bool("options.hasVertexNormals", hasVertexNormals);
  Check_default.typeOf.bool("options.hasWebMercatorT", hasWebMercatorT);
  Check_default.typeOf.object("options.gltf", gltf);
  Check_default.typeOf.number("options.minimumHeight", minimumHeight);
  Check_default.typeOf.number("options.maximumHeight", maximumHeight);
  Check_default.typeOf.object("options.boundingSphere", options.boundingSphere);
  Check_default.typeOf.object(
    "options.orientedBoundingBox",
    options.orientedBoundingBox
  );
  Check_default.typeOf.object(
    "options.horizonOcclusionPoint",
    options.horizonOcclusionPoint
  );
  Check_default.typeOf.number("options.skirtHeight", skirtHeight);
  const hasExaggeration = exaggeration !== 1;
  const hasGeodeticSurfaceNormals = hasExaggeration;
  const boundingSphere = BoundingSphere_default.clone(
    options.boundingSphere,
    new BoundingSphere_default()
  );
  const orientedBoundingBox = OrientedBoundingBox_default.clone(
    options.orientedBoundingBox,
    new OrientedBoundingBox_default()
  );
  const horizonOcclusionPoint = Cartesian3_default.clone(
    options.horizonOcclusionPoint,
    new Cartesian3_default()
  );
  const ellipsoid = Ellipsoid_default.clone(options.ellipsoid, new Ellipsoid_default());
  const rectangle = Rectangle_default.clone(options.rectangle, new Rectangle_default());
  const hasMeshOptCompression = gltf.extensionsRequired !== void 0 && gltf.extensionsRequired.indexOf("EXT_meshopt_compression") !== -1;
  const decoderPromise = hasMeshOptCompression ? MeshoptDecoder.ready : Promise.resolve(void 0);
  await decoderPromise;
  const tileMinLongitude = rectangle.west;
  const tileMinLatitude = rectangle.south;
  const tileMaxLatitude = rectangle.north;
  const tileLengthLongitude = rectangle.width;
  const tileLengthLatitude = rectangle.height;
  const approximateCenterCartographic = Rectangle_default.center(
    rectangle,
    scratchCenterCartographic
  );
  approximateCenterCartographic.height = 0.5 * (minimumHeight + maximumHeight);
  const approximateCenterPosition = Cartographic_default.toCartesian(
    approximateCenterCartographic,
    ellipsoid,
    scratchCenterCartesian
  );
  const enuToEcef = Transforms_default.eastNorthUpToFixedFrame(
    approximateCenterPosition,
    ellipsoid,
    scratchEnuToEcef
  );
  const ecefToEnu = Matrix4_default.inverseTransformation(enuToEcef, scratchEcefToEnu);
  let tilesetTransform = Matrix4_default.unpack(
    gltf.nodes[0].matrix,
    0,
    scratchTilesetTransform
  );
  tilesetTransform = Matrix4_default.multiply(
    Axis_default.Y_UP_TO_Z_UP,
    tilesetTransform,
    tilesetTransform
  );
  const gltfInfo = decodeGltf(gltf, hasVertexNormals, scratchGltfInfo);
  const skirtVertexCount = TerrainProvider_default.getSkirtVertexCount(
    gltfInfo.edgeIndicesWest,
    gltfInfo.edgeIndicesSouth,
    gltfInfo.edgeIndicesEast,
    gltfInfo.edgeIndicesNorth
  );
  const positionsLocalWithoutSkirts = gltfInfo.positions;
  const normalsWithoutSkirts = gltfInfo.normals;
  const indicesWithoutSkirts = gltfInfo.indices;
  const vertexCountWithoutSkirts = positionsLocalWithoutSkirts.length / 3;
  const vertexCountWithSkirts = vertexCountWithoutSkirts + skirtVertexCount;
  const indexCountWithoutSkirts = indicesWithoutSkirts.length;
  const skirtIndexCount = TerrainProvider_default.getSkirtIndexCountWithFilledCorners(skirtVertexCount);
  const SizedIndexTypeWithSkirts = vertexCountWithSkirts <= 65535 ? Uint16Array : Uint32Array;
  const indexBufferWithSkirts = new SizedIndexTypeWithSkirts(
    indexCountWithoutSkirts + skirtIndexCount
  );
  indexBufferWithSkirts.set(indicesWithoutSkirts);
  const westIndices = new SizedIndexTypeWithSkirts(gltfInfo.edgeIndicesWest);
  const southIndices = new SizedIndexTypeWithSkirts(gltfInfo.edgeIndicesSouth);
  const eastIndices = new SizedIndexTypeWithSkirts(gltfInfo.edgeIndicesEast);
  const northIndices = new SizedIndexTypeWithSkirts(gltfInfo.edgeIndicesNorth);
  const sortedWestIndices = new SizedIndexTypeWithSkirts(westIndices).sort();
  const sortedSouthIndices = new SizedIndexTypeWithSkirts(southIndices).sort();
  const sortedEastIndices = new SizedIndexTypeWithSkirts(eastIndices).sort();
  const sortedNorthIndices = new SizedIndexTypeWithSkirts(northIndices).sort();
  const southMercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(tileMinLatitude);
  const northMercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(tileMaxLatitude);
  const oneOverMercatorHeight = 1 / (northMercatorAngle - southMercatorAngle);
  let minPosEnu = Cartesian3_default.fromElements(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    scratchMinimumPositionENU
  );
  let maxPosEnu = Cartesian3_default.fromElements(
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    scratchMaximumPositionENU
  );
  const tempTerrainEncoding = new TerrainEncoding_default(
    boundingSphere.center,
    void 0,
    void 0,
    void 0,
    void 0,
    hasVertexNormals,
    hasWebMercatorT,
    hasGeodeticSurfaceNormals,
    exaggeration,
    exaggerationRelativeHeight
  );
  const tempBufferStride = tempTerrainEncoding.stride;
  const tempBuffer = new Float32Array(vertexCountWithSkirts * tempBufferStride);
  let tempBufferOffset = 0;
  for (let i = 0; i < vertexCountWithoutSkirts; i++) {
    const posLocal = Cartesian3_default.unpack(
      positionsLocalWithoutSkirts,
      i * 3,
      scratchPosLocal
    );
    const posECEF = Matrix4_default.multiplyByPoint(
      tilesetTransform,
      posLocal,
      scratchPosEcef
    );
    const cartographic = Cartographic_default.fromCartesian(
      posECEF,
      ellipsoid,
      scratchCartographic
    );
    const { longitude, latitude, height } = cartographic;
    let u = (longitude - tileMinLongitude) / tileLengthLongitude;
    let v = (latitude - tileMinLatitude) / tileLengthLatitude;
    u = Math_default.clamp(u, 0, 1);
    v = Math_default.clamp(v, 0, 1);
    if (binarySearch_default(sortedWestIndices, i, sortedEdgeCompare) >= 0) {
      u = 0;
    } else if (binarySearch_default(sortedEastIndices, i, sortedEdgeCompare) >= 0) {
      u = 1;
    }
    if (binarySearch_default(sortedSouthIndices, i, sortedEdgeCompare) >= 0) {
      v = 0;
    } else if (binarySearch_default(sortedNorthIndices, i, sortedEdgeCompare) >= 0) {
      v = 1;
    }
    const uv = Cartesian2_default.fromElements(u, v, scratchUV);
    let normalOct;
    if (hasVertexNormals) {
      let normal = Cartesian3_default.unpack(
        normalsWithoutSkirts,
        i * 3,
        scratchNormal
      );
      normal = Matrix4_default.multiplyByPointAsVector(
        tilesetTransform,
        normal,
        scratchNormal
      );
      normal = Cartesian3_default.normalize(normal, scratchNormal);
      normalOct = AttributeCompression_default.octEncode(normal, scratchNormalOct);
    }
    let webMercatorT;
    if (hasWebMercatorT) {
      const mercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(latitude);
      webMercatorT = (mercatorAngle - southMercatorAngle) * oneOverMercatorHeight;
    }
    let geodeticSurfaceNormal;
    if (hasGeodeticSurfaceNormals) {
      geodeticSurfaceNormal = ellipsoid.geodeticSurfaceNormal(
        posECEF,
        scratchGeodeticSurfaceNormal
      );
    }
    tempBufferOffset = tempTerrainEncoding.encode(
      tempBuffer,
      tempBufferOffset,
      posECEF,
      uv,
      height,
      normalOct,
      webMercatorT,
      geodeticSurfaceNormal
    );
    const posEnu = Matrix4_default.multiplyByPoint(ecefToEnu, posECEF, scratchPosEnu);
    minPosEnu = Cartesian3_default.minimumByComponent(posEnu, minPosEnu, minPosEnu);
    maxPosEnu = Cartesian3_default.maximumByComponent(posEnu, maxPosEnu, maxPosEnu);
  }
  const mesh = new TerrainMesh_default(
    Cartesian3_default.clone(tempTerrainEncoding.center, new Cartesian3_default()),
    tempBuffer,
    indexBufferWithSkirts,
    indexCountWithoutSkirts,
    vertexCountWithoutSkirts,
    minimumHeight,
    maximumHeight,
    BoundingSphere_default.clone(boundingSphere, new BoundingSphere_default()),
    Cartesian3_default.clone(horizonOcclusionPoint, new Cartesian3_default()),
    tempBufferStride,
    OrientedBoundingBox_default.clone(orientedBoundingBox, new OrientedBoundingBox_default()),
    tempTerrainEncoding,
    westIndices,
    southIndices,
    eastIndices,
    northIndices
  );
  addSkirtsToMesh(
    mesh,
    rectangle,
    ellipsoid,
    minPosEnu,
    maxPosEnu,
    enuToEcef,
    ecefToEnu,
    skirtHeight
  );
  return Promise.resolve(mesh);
};
var scratchMinUV = new Cartesian2_default();
var scratchMaxUV = new Cartesian2_default();
var scratchPolygonIndices = new Array(6);
var scratchUvA = new Cartesian2_default();
var scratchUvB = new Cartesian2_default();
var scratchUvC = new Cartesian2_default();
var scratchNormalA = new Cartesian3_default();
var scratchNormalB = new Cartesian3_default();
var scratchNormalC = new Cartesian3_default();
var scratchCenterCartographicUpsample = new Cartographic_default();
var scratchCenterCartesianUpsample = new Cartesian3_default();
var scratchCartographicSkirt = new Cartographic_default();
var scratchCartographicUpsample = new Cartographic_default();
var scratchPosEcefSkirt = new Cartesian3_default();
var scratchPosEcefUpsample = new Cartesian3_default();
var scratchPosEnuSkirt = new Cartesian3_default();
var scratchPosEnuUpsample = new Cartesian3_default();
var scratchMinimumPositionENUSkirt = new Cartesian3_default();
var scratchMaximumPositionENUSkirt = new Cartesian3_default();
var scratchMinimumPositionENUUpsample = new Cartesian3_default();
var scratchMaximumPositionENUUpsample = new Cartesian3_default();
var scratchEnuToEcefUpsample = new Matrix4_default();
var scratchEcefToEnuUpsample = new Matrix4_default();
var scratchUVSkirt = new Cartesian2_default();
var scratchUVUpsample = new Cartesian2_default();
var scratchHorizonOcclusionPoint = new Cartesian3_default();
var scratchBoundingSphere = new BoundingSphere_default();
var scratchOrientedBoundingBox = new OrientedBoundingBox_default();
var scratchAABBEnuSkirt = new AxisAlignedBoundingBox_default();
var scratchNormalUpsample = new Cartesian3_default();
var scratchNormalOctSkirt = new Cartesian2_default();
var scratchNormalOctUpsample = new Cartesian2_default();
var scratchGeodeticSurfaceNormalSkirt = new Cartesian3_default();
var scratchGeodeticSurfaceNormalUpsample = new Cartesian3_default();
function decodePositions(gltf) {
  const primitive = gltf.meshes[0].primitives[0];
  const accessor = gltf.accessors[primitive.attributes["POSITION"]];
  const bufferView = gltf.bufferViews[accessor.bufferView];
  const positionCount = accessor.count;
  const bufferViewMeshOpt = bufferView.extensions ? bufferView.extensions["EXT_meshopt_compression"] : void 0;
  if (bufferViewMeshOpt === void 0) {
    const buffer2 = gltf.buffers[bufferView.buffer].extras._pipeline.source;
    return new Float32Array(
      buffer2.buffer,
      buffer2.byteOffset + // offset from the start of the glb
      (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
      positionCount * 3
    );
  }
  const buffer = gltf.buffers[bufferViewMeshOpt.buffer].extras._pipeline.source;
  const compressedBuffer = new Uint8Array(
    buffer.buffer,
    buffer.byteOffset + // offset from the start of the glb
    (bufferViewMeshOpt.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
    bufferViewMeshOpt.byteLength
  );
  const positionByteLength = bufferViewMeshOpt.byteStride;
  const PositionType = positionByteLength === 4 ? Uint8Array : Uint16Array;
  const positionsResult = new PositionType(positionCount * 4);
  MeshoptDecoder.decodeVertexBuffer(
    new Uint8Array(positionsResult.buffer),
    positionCount,
    positionByteLength,
    compressedBuffer
  );
  const positionStorageValueMax = (1 << positionsResult.BYTES_PER_ELEMENT * 8) - 1;
  const positions = new Float32Array(positionCount * 3);
  for (let p = 0; p < positionCount; p++) {
    positions[p * 3 + 0] = positionsResult[p * 4 + 0] / positionStorageValueMax;
    positions[p * 3 + 1] = positionsResult[p * 4 + 1] / positionStorageValueMax;
    positions[p * 3 + 2] = positionsResult[p * 4 + 2] / positionStorageValueMax;
  }
  return positions;
}
function decodeNormals(gltf) {
  const primitive = gltf.meshes[0].primitives[0];
  const accessor = gltf.accessors[primitive.attributes["NORMAL"]];
  const bufferView = gltf.bufferViews[accessor.bufferView];
  const normalCount = accessor.count;
  const bufferViewMeshOpt = bufferView.extensions ? bufferView.extensions["EXT_meshopt_compression"] : void 0;
  if (bufferViewMeshOpt === void 0) {
    const buffer2 = gltf.buffers[bufferView.buffer].extras._pipeline.source;
    return new Float32Array(
      buffer2.buffer,
      buffer2.byteOffset + // offset from the start of the glb
      (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
      normalCount * 3
    );
  }
  const buffer = gltf.buffers[bufferViewMeshOpt.buffer].extras._pipeline.source;
  const compressedBuffer = new Uint8Array(
    buffer.buffer,
    buffer.byteOffset + // offset from the start of the glb
    (bufferViewMeshOpt.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
    bufferViewMeshOpt.byteLength
  );
  const normalByteLength = bufferViewMeshOpt.byteStride;
  const normalsResult = new Int8Array(normalCount * normalByteLength);
  MeshoptDecoder.decodeVertexBuffer(
    new Uint8Array(normalsResult.buffer),
    normalCount,
    normalByteLength,
    compressedBuffer
  );
  const normals = new Float32Array(normalCount * 3);
  for (let i = 0; i < normalCount; i++) {
    let octX = Math.max(normalsResult[i * 4 + 0] / 127, -1);
    let octY = Math.max(normalsResult[i * 4 + 1] / 127, -1);
    const octZ = 1 - (Math.abs(octX) + Math.abs(octY));
    if (octZ < 0) {
      const oldX = octX;
      const oldY = octY;
      octX = (1 - Math.abs(oldY)) * Math_default.signNotZero(oldX);
      octY = (1 - Math.abs(oldX)) * Math_default.signNotZero(oldY);
    }
    let normal = scratchNormal;
    normal.x = octX;
    normal.y = octY;
    normal.z = octZ;
    normal = Cartesian3_default.normalize(normal, scratchNormal);
    normals[i * 3 + 0] = normal.x;
    normals[i * 3 + 1] = normal.y;
    normals[i * 3 + 2] = normal.z;
  }
  return normals;
}
function decodeIndices(gltf) {
  const primitive = gltf.meshes[0].primitives[0];
  const accessor = gltf.accessors[primitive.indices];
  const bufferView = gltf.bufferViews[accessor.bufferView];
  const indexCount = accessor.count;
  const SizedIndexType = accessor.componentType === ComponentDatatype_default.UNSIGNED_SHORT ? Uint16Array : Uint32Array;
  const bufferViewMeshOpt = bufferView.extensions ? bufferView.extensions["EXT_meshopt_compression"] : void 0;
  if (bufferViewMeshOpt === void 0) {
    const buffer2 = gltf.buffers[bufferView.buffer].extras._pipeline.source;
    return new SizedIndexType(
      buffer2.buffer,
      buffer2.byteOffset + // offset from the glb
      (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
      indexCount
    );
  }
  const buffer = gltf.buffers[bufferViewMeshOpt.buffer].extras._pipeline.source;
  const compressedBuffer = new Uint8Array(
    buffer.buffer,
    buffer.byteOffset + // offset from the start of the glb
    (bufferViewMeshOpt.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
    bufferViewMeshOpt.byteLength
  );
  const indices = new SizedIndexType(indexCount);
  MeshoptDecoder.decodeIndexBuffer(
    new Uint8Array(indices.buffer),
    indexCount,
    bufferViewMeshOpt.byteStride,
    compressedBuffer
  );
  return indices;
}
function decodeEdgeIndices(gltf, name) {
  const primitive = gltf.meshes[0].primitives[0];
  const accessor = gltf.accessors[primitive.extensions.CESIUM_tile_edges[name]];
  const bufferView = gltf.bufferViews[accessor.bufferView];
  const indexCount = accessor.count;
  const SizedIndexType = accessor.componentType === ComponentDatatype_default.UNSIGNED_SHORT ? Uint16Array : Uint32Array;
  const bufferViewMeshOpt = bufferView.extensions ? bufferView.extensions["EXT_meshopt_compression"] : void 0;
  if (bufferViewMeshOpt === void 0) {
    const buffer2 = gltf.buffers[bufferView.buffer].extras._pipeline.source;
    return new SizedIndexType(
      buffer2.buffer,
      buffer2.byteOffset + // offset from the glb
      (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
      indexCount
    );
  }
  const buffer = gltf.buffers[bufferViewMeshOpt.buffer].extras._pipeline.source;
  const compressedBuffer = new Uint8Array(
    buffer.buffer,
    buffer.byteOffset + // offset from the start of the glb
    (bufferViewMeshOpt.byteOffset ?? 0) + (accessor.byteOffset ?? 0),
    bufferViewMeshOpt.byteLength
  );
  const indices = new SizedIndexType(indexCount);
  const indexByteLength = bufferViewMeshOpt.byteStride;
  MeshoptDecoder.decodeIndexSequence(
    new Uint8Array(indices.buffer),
    indexCount,
    indexByteLength,
    compressedBuffer
  );
  return indices;
}
function decodeGltf(gltf, hasNormals, result) {
  result.positions = decodePositions(gltf);
  result.normals = hasNormals ? decodeNormals(gltf) : void 0;
  result.indices = decodeIndices(gltf);
  result.edgeIndicesWest = decodeEdgeIndices(gltf, "left");
  result.edgeIndicesSouth = decodeEdgeIndices(gltf, "bottom");
  result.edgeIndicesEast = decodeEdgeIndices(gltf, "right");
  result.edgeIndicesNorth = decodeEdgeIndices(gltf, "top");
  return result;
}
Cesium3DTilesTerrainGeometryProcessor.upsampleMesh = function(options) {
  options = options ?? Frozen_default.EMPTY_OBJECT;
  const {
    isEastChild,
    isNorthChild,
    parentMinimumHeight,
    parentMaximumHeight,
    skirtHeight
  } = options;
  Check_default.typeOf.bool("options.isEastChild", isEastChild);
  Check_default.typeOf.bool("options.isNorthChild", isNorthChild);
  Check_default.typeOf.object("options.parentVertices", options.parentVertices);
  Check_default.typeOf.object("options.parentIndices", options.parentIndices);
  Check_default.typeOf.number(
    "options.parentVertexCountWithoutSkirts",
    options.parentVertexCountWithoutSkirts
  );
  Check_default.typeOf.number(
    "options.parentIndexCountWithoutSkirts",
    options.parentIndexCountWithoutSkirts
  );
  Check_default.typeOf.number("options.parentMinimumHeight", parentMinimumHeight);
  Check_default.typeOf.number("options.parentMaximumHeight", parentMaximumHeight);
  Check_default.typeOf.object("options.parentEncoding", options.parentEncoding);
  Check_default.typeOf.object("options.rectangle", options.rectangle);
  Check_default.typeOf.number("options.skirtHeight", skirtHeight);
  Check_default.typeOf.object("options.ellipsoid", options.ellipsoid);
  const indexCount = options.parentIndexCountWithoutSkirts;
  const indices = options.parentIndices;
  const vertexCount = options.parentVertexCountWithoutSkirts;
  const vertexBuffer = options.parentVertices;
  const encoding = TerrainEncoding_default.clone(
    options.parentEncoding,
    new TerrainEncoding_default()
  );
  const hasVertexNormals = encoding.hasVertexNormals;
  const hasWebMercatorT = encoding.hasWebMercatorT;
  const exaggeration = encoding.exaggeration;
  const exaggerationRelativeHeight = encoding.exaggerationRelativeHeight;
  const hasExaggeration = exaggeration !== 1;
  const hasGeodeticSurfaceNormals = hasExaggeration;
  const upsampleRectangle = Rectangle_default.clone(options.rectangle, new Rectangle_default());
  const ellipsoid = Ellipsoid_default.clone(options.ellipsoid);
  const upsampledTriIDs = [];
  const upsampledUVs = [];
  const upsampledBarys = [];
  const upsampledIndices = [];
  const upsampledWestIndices = [];
  const upsampledSouthIndices = [];
  const upsampledEastIndices = [];
  const upsampledNorthIndices = [];
  clipTileFromQuadrant(
    isEastChild,
    isNorthChild,
    indexCount,
    indices,
    vertexCount,
    vertexBuffer,
    encoding,
    upsampledIndices,
    upsampledWestIndices,
    upsampledSouthIndices,
    upsampledEastIndices,
    upsampledNorthIndices,
    upsampledTriIDs,
    upsampledBarys,
    upsampledUVs
  );
  const approximateCenterCartographic = Rectangle_default.center(
    upsampleRectangle,
    scratchCenterCartographicUpsample
  );
  approximateCenterCartographic.height = 0.5 * (parentMinimumHeight + parentMaximumHeight);
  const approximateCenterPosition = Cartographic_default.toCartesian(
    approximateCenterCartographic,
    ellipsoid,
    scratchCenterCartesianUpsample
  );
  const upsampledVertexCountWithoutSkirts = upsampledTriIDs.length;
  const upsampledTerrainEncoding = new TerrainEncoding_default(
    approximateCenterPosition,
    void 0,
    void 0,
    void 0,
    void 0,
    hasVertexNormals,
    hasWebMercatorT,
    hasGeodeticSurfaceNormals,
    exaggeration,
    exaggerationRelativeHeight
  );
  const upsampledVertexBufferStride = upsampledTerrainEncoding.stride;
  const upsampledSkirtVertexCount = TerrainProvider_default.getSkirtVertexCount(
    upsampledWestIndices,
    upsampledSouthIndices,
    upsampledEastIndices,
    upsampledNorthIndices
  );
  const upsampledVertexCountWithSkirts = upsampledVertexCountWithoutSkirts + upsampledSkirtVertexCount;
  const upsampledIndexCountWithoutSkirts = upsampledIndices.length;
  const upsampledSkirtIndexCount = TerrainProvider_default.getSkirtIndexCountWithFilledCorners(
    upsampledSkirtVertexCount
  );
  const upsampledIndexCountWithSkirts = upsampledIndexCountWithoutSkirts + upsampledSkirtIndexCount;
  const SizedIndexTypeWithSkirts = upsampledVertexCountWithSkirts <= 65535 ? Uint16Array : Uint32Array;
  const upsampledIndexBuffer = new SizedIndexTypeWithSkirts(
    upsampledIndexCountWithSkirts
  );
  upsampledIndexBuffer.set(upsampledIndices);
  const upsampledWestIndicesBuffer = new SizedIndexTypeWithSkirts(
    upsampledWestIndices
  );
  const upsampledSouthIndicesBuffer = new SizedIndexTypeWithSkirts(
    upsampledSouthIndices
  );
  const upsampledEastIndicesBuffer = new SizedIndexTypeWithSkirts(
    upsampledEastIndices
  );
  const upsampledNorthIndicesBuffer = new SizedIndexTypeWithSkirts(
    upsampledNorthIndices
  );
  const upsampledVertexBuffer = new Float32Array(
    upsampledVertexCountWithSkirts * upsampledVertexBufferStride
  );
  let upsampledVertexBufferOffset = 0;
  const enuToEcef = Transforms_default.eastNorthUpToFixedFrame(
    approximateCenterPosition,
    ellipsoid,
    scratchEnuToEcefUpsample
  );
  const ecefToEnu = Matrix4_default.inverseTransformation(
    enuToEcef,
    scratchEcefToEnuUpsample
  );
  const minimumLongitude = upsampleRectangle.west;
  const maximumLongitude = upsampleRectangle.east;
  const minimumLatitude = upsampleRectangle.south;
  const maximumLatitude = upsampleRectangle.north;
  const southMercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(minimumLatitude);
  const northMercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(maximumLatitude);
  const oneOverMercatorHeight = 1 / (northMercatorAngle - southMercatorAngle);
  let minimumHeight = Number.POSITIVE_INFINITY;
  let maximumHeight = Number.NEGATIVE_INFINITY;
  let minPosEnu = Cartesian3_default.fromElements(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY,
    scratchMinimumPositionENUUpsample
  );
  let maxPosEnu = Cartesian3_default.fromElements(
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    scratchMaximumPositionENUUpsample
  );
  for (let i = 0; i < upsampledVertexCountWithoutSkirts; i++) {
    const triId = upsampledTriIDs[i];
    const indexA = indices[triId * 3 + 0];
    const indexB = indices[triId * 3 + 1];
    const indexC = indices[triId * 3 + 2];
    const uv = scratchUVUpsample;
    uv.x = upsampledUVs[i * 2 + 0];
    uv.y = upsampledUVs[i * 2 + 1];
    const u = uv.x;
    const v = uv.y;
    const baryA = upsampledBarys[i * 2 + 0];
    const baryB = upsampledBarys[i * 2 + 1];
    const baryC = 1 - baryA - baryB;
    const heightA = encoding.decodeHeight(vertexBuffer, indexA);
    const heightB = encoding.decodeHeight(vertexBuffer, indexB);
    const heightC = encoding.decodeHeight(vertexBuffer, indexC);
    const height = heightA * baryA + heightB * baryB + heightC * baryC;
    minimumHeight = Math.min(height, minimumHeight);
    maximumHeight = Math.max(height, maximumHeight);
    const lon = Math_default.lerp(minimumLongitude, maximumLongitude, u);
    const lat = Math_default.lerp(minimumLatitude, maximumLatitude, v);
    const carto = Cartographic_default.fromRadians(
      lon,
      lat,
      height,
      scratchCartographicUpsample
    );
    const position = Cartographic_default.toCartesian(
      carto,
      ellipsoid,
      scratchPosEcefUpsample
    );
    const posEnu = Matrix4_default.multiplyByPoint(
      ecefToEnu,
      position,
      scratchPosEnuUpsample
    );
    minPosEnu = Cartesian3_default.minimumByComponent(posEnu, minPosEnu, minPosEnu);
    maxPosEnu = Cartesian3_default.maximumByComponent(posEnu, maxPosEnu, maxPosEnu);
    let normalOct;
    if (hasVertexNormals) {
      const normalA = encoding.decodeNormal(
        vertexBuffer,
        indexA,
        scratchNormalA
      );
      const normalB = encoding.decodeNormal(
        vertexBuffer,
        indexB,
        scratchNormalB
      );
      const normalC = encoding.decodeNormal(
        vertexBuffer,
        indexC,
        scratchNormalC
      );
      let normal = Cartesian3_default.fromElements(
        normalA.x * baryA + normalB.x * baryB + normalC.x * baryC,
        normalA.y * baryA + normalB.y * baryB + normalC.y * baryC,
        normalA.z * baryA + normalB.z * baryB + normalC.z * baryC,
        scratchNormalUpsample
      );
      normal = Cartesian3_default.normalize(normal, scratchNormalUpsample);
      normalOct = AttributeCompression_default.octEncode(
        normal,
        scratchNormalOctUpsample
      );
    }
    let webMercatorT;
    if (hasWebMercatorT) {
      const mercatorAngle = WebMercatorProjection_default.geodeticLatitudeToMercatorAngle(lat);
      webMercatorT = (mercatorAngle - southMercatorAngle) * oneOverMercatorHeight;
    }
    let geodeticSurfaceNormal;
    if (hasGeodeticSurfaceNormals) {
      geodeticSurfaceNormal = ellipsoid.geodeticSurfaceNormal(
        position,
        scratchGeodeticSurfaceNormalUpsample
      );
    }
    upsampledVertexBufferOffset = upsampledTerrainEncoding.encode(
      upsampledVertexBuffer,
      upsampledVertexBufferOffset,
      position,
      uv,
      height,
      normalOct,
      webMercatorT,
      geodeticSurfaceNormal
    );
  }
  const orientedBoundingBox = OrientedBoundingBox_default.fromRectangle(
    upsampleRectangle,
    minimumHeight,
    maximumHeight,
    ellipsoid,
    scratchOrientedBoundingBox
  );
  const boundingSphere = BoundingSphere_default.fromVertices(
    upsampledVertexBuffer,
    upsampledTerrainEncoding.center,
    upsampledVertexBufferStride,
    scratchBoundingSphere
  );
  const occluder = new EllipsoidalOccluder_default(ellipsoid);
  const horizonOcclusionPoint = occluder.computeHorizonCullingPointFromVerticesPossiblyUnderEllipsoid(
    upsampledTerrainEncoding.center,
    // vector from ellipsoid center to horizon occlusion point
    upsampledVertexBuffer,
    upsampledVertexBufferStride,
    upsampledTerrainEncoding.center,
    minimumHeight,
    scratchHorizonOcclusionPoint
  );
  const upsampledMesh = new TerrainMesh_default(
    Cartesian3_default.clone(upsampledTerrainEncoding.center, new Cartesian3_default()),
    upsampledVertexBuffer,
    upsampledIndexBuffer,
    upsampledIndexCountWithoutSkirts,
    upsampledVertexCountWithoutSkirts,
    minimumHeight,
    maximumHeight,
    BoundingSphere_default.clone(boundingSphere),
    Cartesian3_default.clone(horizonOcclusionPoint),
    upsampledVertexBufferStride,
    OrientedBoundingBox_default.clone(orientedBoundingBox),
    upsampledTerrainEncoding,
    upsampledWestIndicesBuffer,
    upsampledSouthIndicesBuffer,
    upsampledEastIndicesBuffer,
    upsampledNorthIndicesBuffer
  );
  addSkirtsToMesh(
    upsampledMesh,
    upsampleRectangle,
    ellipsoid,
    minPosEnu,
    maxPosEnu,
    enuToEcef,
    ecefToEnu,
    skirtHeight
  );
  return upsampledMesh;
};
function addSkirtsToMesh(mesh, rectangle, ellipsoid, enuMinimum, enuMaximum, enuToEcef, ecefToEnu, skirtHeight) {
  const { encoding } = mesh;
  const vertexStride = encoding.stride;
  const vertexBuffer = mesh.vertices;
  const {
    hasVertexNormals,
    hasWebMercatorT,
    exaggeration,
    exaggerationRelativeHeight
  } = encoding;
  const hasExaggeration = exaggeration !== 1;
  const hasGeodeticSurfaceNormals = hasExaggeration;
  const vertexCountWithoutSkirts = mesh.vertexCountWithoutSkirts;
  let vertexBufferOffset = vertexCountWithoutSkirts * vertexStride;
  const vertexCountWithSkirts = vertexBuffer.length / vertexStride;
  const skirtVertexCount = vertexCountWithSkirts - vertexCountWithoutSkirts;
  const indices = mesh.indices;
  const indexCountWithoutSkirts = mesh.indexCountWithoutSkirts;
  const westIndices = mesh.westIndicesSouthToNorth;
  const southIndices = mesh.southIndicesEastToWest;
  const eastIndices = mesh.eastIndicesNorthToSouth;
  const northIndices = mesh.northIndicesWestToEast;
  TerrainProvider_default.addSkirtIndicesWithFilledCorners(
    westIndices,
    southIndices,
    eastIndices,
    northIndices,
    vertexCountWithoutSkirts,
    indices,
    indexCountWithoutSkirts
  );
  const westOffset = 0;
  const southOffset = westOffset + westIndices.length;
  const eastOffset = southOffset + southIndices.length;
  const northOffset = eastOffset + eastIndices.length;
  const edges = [westIndices, southIndices, eastIndices, northIndices];
  const edgeIndexOffset = [westOffset, southOffset, eastOffset, northOffset];
  const edgeLongitudeSign = [-1, 0, 1, 0];
  const edgeLatitudeSign = [0, -1, 0, 1];
  const minimumPositionENUWithSkirts = Cartesian3_default.clone(
    enuMinimum,
    scratchMinimumPositionENUSkirt
  );
  const maximumPositionENUWithSkirts = Cartesian3_default.clone(
    enuMaximum,
    scratchMaximumPositionENUSkirt
  );
  const maximumHeight = mesh.maximumHeight;
  const minimumHeightWithSkirts = mesh.minimumHeight - skirtHeight;
  for (let skirtId = 0; skirtId < skirtVertexCount; skirtId++) {
    let side = 0;
    for (side = 0; side < 3; side++) {
      if (skirtId < edgeIndexOffset[side + 1]) {
        break;
      }
    }
    const vertexIndex = edges[side][skirtId - edgeIndexOffset[side]];
    const uv = encoding.decodeTextureCoordinates(
      vertexBuffer,
      vertexIndex,
      scratchUVSkirt
    );
    const skirtLonLatOffsetPercent = 1e-4;
    const longitudeT = uv.x + edgeLongitudeSign[side] * skirtLonLatOffsetPercent;
    const latitudeT = uv.y + edgeLatitudeSign[side] * skirtLonLatOffsetPercent;
    const longitude = Math_default.lerp(
      rectangle.west,
      rectangle.east,
      longitudeT
    );
    const latitude = Math_default.clamp(
      Math_default.lerp(rectangle.south, rectangle.north, latitudeT),
      -Math_default.PI_OVER_TWO,
      +Math_default.PI_OVER_TWO
    );
    const vertHeight = encoding.decodeHeight(vertexBuffer, vertexIndex);
    const height = vertHeight - skirtHeight;
    const cartographic = Cartographic_default.fromRadians(
      longitude,
      latitude,
      height,
      scratchCartographicSkirt
    );
    const positionEcef = Cartographic_default.toCartesian(
      cartographic,
      ellipsoid,
      scratchPosEcefSkirt
    );
    let normalOct;
    if (hasVertexNormals) {
      normalOct = encoding.getOctEncodedNormal(
        vertexBuffer,
        vertexIndex,
        scratchNormalOctSkirt
      );
    }
    let webMercatorT;
    if (hasWebMercatorT) {
      webMercatorT = encoding.decodeWebMercatorT(vertexBuffer, vertexIndex);
    }
    let geodeticSurfaceNormal;
    if (hasGeodeticSurfaceNormals) {
      geodeticSurfaceNormal = ellipsoid.geodeticSurfaceNormal(
        positionEcef,
        scratchGeodeticSurfaceNormalSkirt
      );
    }
    vertexBufferOffset = encoding.encode(
      vertexBuffer,
      vertexBufferOffset,
      positionEcef,
      uv,
      height,
      normalOct,
      webMercatorT,
      geodeticSurfaceNormal
    );
    const positionENU = Matrix4_default.multiplyByPoint(
      ecefToEnu,
      positionEcef,
      scratchPosEnuSkirt
    );
    Cartesian3_default.minimumByComponent(
      positionENU,
      minimumPositionENUWithSkirts,
      minimumPositionENUWithSkirts
    );
    Cartesian3_default.maximumByComponent(
      positionENU,
      maximumPositionENUWithSkirts,
      maximumPositionENUWithSkirts
    );
  }
  const aabbEnuWithSkirts = AxisAlignedBoundingBox_default.fromCorners(
    minimumPositionENUWithSkirts,
    maximumPositionENUWithSkirts,
    scratchAABBEnuSkirt
  );
  const encodingWithSkirts = new TerrainEncoding_default(
    encoding.center,
    aabbEnuWithSkirts,
    minimumHeightWithSkirts,
    maximumHeight,
    enuToEcef,
    encoding.hasVertexNormals,
    encoding.hasWebMercatorT,
    hasGeodeticSurfaceNormals,
    exaggeration,
    exaggerationRelativeHeight
  );
  if (encoding.quantization !== encodingWithSkirts.quantization) {
    const finalEncoding = encodingWithSkirts;
    const finalVertexStride = finalEncoding.stride;
    const finalVertexBuffer = new Float32Array(
      vertexCountWithSkirts * finalVertexStride
    );
    let finalVertexBufferOffset = 0;
    for (let i = 0; i < vertexCountWithSkirts; i++) {
      finalVertexBufferOffset = finalEncoding.encode(
        finalVertexBuffer,
        finalVertexBufferOffset,
        encoding.decodePosition(vertexBuffer, i, scratchPosEcefSkirt),
        encoding.decodeTextureCoordinates(vertexBuffer, i, scratchUVSkirt),
        encoding.decodeHeight(vertexBuffer, i),
        encoding.hasVertexNormals ? encoding.getOctEncodedNormal(vertexBuffer, i, scratchNormalOctSkirt) : void 0,
        encoding.hasWebMercatorT ? encoding.decodeWebMercatorT(vertexBuffer, i) : void 0,
        encoding.hasGeodeticSurfaceNormals ? encoding.decodeGeodeticSurfaceNormal(
          vertexBuffer,
          i,
          scratchGeodeticSurfaceNormalSkirt
        ) : void 0
      );
    }
    mesh.vertices = finalVertexBuffer;
    mesh.stride = finalVertexStride;
    mesh.encoding = finalEncoding;
  }
  return mesh;
}
var EDGE_ID_LEFT = 0;
var EDGE_ID_TOP = 1;
var EDGE_ID_RIGHT = 2;
var EDGE_ID_BOTTOM = 3;
var EDGE_COUNT = 4;
var scratchIntersection = new Cartesian3_default();
var scratchInBarys = [
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default()
];
var scratchInPoints = [
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default()
];
var scratchOutBarys = [
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default()
];
var scratchOutPoints = [
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default(),
  new Cartesian2_default()
];
function inside(boxMinimum, boxMaximum, edgeId, p) {
  switch (edgeId) {
    case EDGE_ID_LEFT:
      return Math_default.sign(p.x - boxMinimum.x);
    case EDGE_ID_RIGHT:
      return Math_default.sign(boxMaximum.x - p.x);
    case EDGE_ID_BOTTOM:
      return Math_default.sign(p.y - boxMinimum.y);
    default:
      return Math_default.sign(boxMaximum.y - p.y);
  }
}
function intersect(boxMinimum, boxMaximum, edgeId, a, b, result) {
  let t, intersectX, intersectY;
  switch (edgeId) {
    case EDGE_ID_LEFT:
      t = (boxMinimum.x - a.x) / (b.x - a.x);
      intersectX = boxMinimum.x;
      intersectY = a.y + (b.y - a.y) * t;
      break;
    case EDGE_ID_RIGHT:
      t = (boxMaximum.x - a.x) / (b.x - a.x);
      intersectX = boxMaximum.x;
      intersectY = a.y + (b.y - a.y) * t;
      break;
    case EDGE_ID_BOTTOM:
      t = (boxMinimum.y - a.y) / (b.y - a.y);
      intersectX = a.x + (b.x - a.x) * t;
      intersectY = boxMinimum.y;
      break;
    default:
      t = (boxMaximum.y - a.y) / (b.y - a.y);
      intersectX = a.x + (b.x - a.x) * t;
      intersectY = boxMaximum.y;
      break;
  }
  return Cartesian3_default.fromElements(intersectX, intersectY, t, result);
}
var scratchPolygon = {
  length: 0,
  coordinates: [
    new Cartesian2_default(),
    new Cartesian2_default(),
    new Cartesian2_default(),
    new Cartesian2_default(),
    new Cartesian2_default(),
    new Cartesian2_default()
  ],
  barycentricCoordinates: [
    new Cartesian3_default(),
    new Cartesian3_default(),
    new Cartesian3_default(),
    new Cartesian3_default(),
    new Cartesian3_default(),
    new Cartesian3_default()
  ]
};
function clipTriangleAgainstBoxEdgeRange(edgeStart, edgeCount, boxMinimum, boxMaximum, p0, p1, p2, result) {
  let inputLength = 0;
  let inputPoints = scratchInPoints;
  let inputBarys = scratchInBarys;
  let outputLength = 3;
  let outputPoints = scratchOutPoints;
  Cartesian2_default.clone(p0, outputPoints[0]);
  Cartesian2_default.clone(p1, outputPoints[1]);
  Cartesian2_default.clone(p2, outputPoints[2]);
  let outputBarys = scratchOutBarys;
  Cartesian3_default.fromElements(1, 0, 0, outputBarys[0]);
  Cartesian3_default.fromElements(0, 1, 0, outputBarys[1]);
  Cartesian3_default.fromElements(0, 0, 1, outputBarys[2]);
  for (let e = 0; e < edgeCount; e++) {
    const edgeId = (edgeStart + e) % EDGE_COUNT;
    const tempPoints = inputPoints;
    const tempBarys = inputBarys;
    inputPoints = outputPoints;
    inputBarys = outputBarys;
    inputLength = outputLength;
    outputPoints = tempPoints;
    outputBarys = tempBarys;
    outputLength = 0;
    let prevIdx = inputLength - 1;
    let prevPoint = inputPoints[prevIdx];
    let prevBary = inputBarys[prevIdx];
    let prevInside = inside(boxMinimum, boxMaximum, edgeId, prevPoint);
    for (let currIdx = 0; currIdx < inputLength; currIdx++) {
      const currPoint = inputPoints[currIdx];
      const currBary = inputBarys[currIdx];
      const currInside = inside(boxMinimum, boxMaximum, edgeId, currPoint);
      if (prevInside * currInside === -1) {
        const intersection = intersect(
          boxMinimum,
          boxMaximum,
          edgeId,
          prevPoint,
          currPoint,
          scratchIntersection
        );
        const { x, y, z: t } = intersection;
        const tInv = 1 - t;
        const baryA = prevBary.x * tInv + currBary.x * t;
        const baryB = prevBary.y * tInv + currBary.y * t;
        const baryC = prevBary.z * tInv + currBary.z * t;
        Cartesian2_default.fromElements(x, y, outputPoints[outputLength]);
        Cartesian3_default.fromElements(baryA, baryB, baryC, outputBarys[outputLength]);
        outputLength++;
      }
      if (currInside >= 0) {
        Cartesian2_default.clone(currPoint, outputPoints[outputLength]);
        Cartesian3_default.clone(currBary, outputBarys[outputLength]);
        outputLength++;
      }
      prevIdx = currIdx;
      prevPoint = currPoint;
      prevBary = currBary;
      prevInside = currInside;
    }
    if (outputLength === 0) {
      break;
    }
  }
  result.length = outputLength;
  for (let i = 0; i < outputLength; i++) {
    Cartesian2_default.clone(outputPoints[i], result.coordinates[i]);
    Cartesian3_default.clone(outputBarys[i], result.barycentricCoordinates[i]);
  }
  return result;
}
function clipTriangleFromQuadrant(isEastChild, isNorthChild, boxMinimum, boxMaximum, p0, p1, p2, result) {
  const edgeStart = isEastChild ? isNorthChild ? EDGE_ID_BOTTOM : EDGE_ID_LEFT : isNorthChild ? EDGE_ID_RIGHT : EDGE_ID_TOP;
  return clipTriangleAgainstBoxEdgeRange(
    edgeStart,
    2,
    boxMinimum,
    boxMaximum,
    p0,
    p1,
    p2,
    result
  );
}
var lookUpTableBaryToPrim = [
  [],
  // 000
  [0],
  // 001
  [1],
  // 010
  [0, 1],
  // 011
  [2],
  // 100
  [0, 2],
  // 101
  [1, 2],
  // 110
  [0, 1, 2]
  // 111
];
function clipTileFromQuadrant(isEastChild, isNorthChild, indexCount, indices, vertexCount, vertices, vertexEncoding, resultIndices, resultWestIndices, resultSouthIndices, resultEastIndices, resultNorthIndices, resultTriIds, resultBary, resultUVs) {
  const upsampledVertexMap = {};
  const minU = isEastChild ? 0.5 : 0;
  const maxU = isEastChild ? 1 : 0.5;
  const minV = isNorthChild ? 0.5 : 0;
  const maxV = isNorthChild ? 1 : 0.5;
  const minUV = scratchMinUV;
  minUV.x = minU;
  minUV.y = minV;
  const maxUV = scratchMaxUV;
  maxUV.x = maxU;
  maxUV.y = maxV;
  let upsampledVertexCount = 0;
  for (let i = 0; i < indexCount; i += 3) {
    const indexA = indices[i + 0];
    const indexB = indices[i + 1];
    const indexC = indices[i + 2];
    const uvA = vertexEncoding.decodeTextureCoordinates(
      vertices,
      indexA,
      scratchUvA
    );
    const uvB = vertexEncoding.decodeTextureCoordinates(
      vertices,
      indexB,
      scratchUvB
    );
    const uvC = vertexEncoding.decodeTextureCoordinates(
      vertices,
      indexC,
      scratchUvC
    );
    const clippedPolygon = clipTriangleFromQuadrant(
      isEastChild,
      isNorthChild,
      minUV,
      maxUV,
      uvA,
      uvB,
      uvC,
      scratchPolygon
    );
    const clippedPolygonLength = clippedPolygon.length;
    if (clippedPolygonLength < 3) {
      continue;
    }
    const polygonUpsampledIndices = scratchPolygonIndices;
    for (let p = 0; p < clippedPolygonLength; p++) {
      const polygonBary = clippedPolygon.barycentricCoordinates[p];
      const bA = polygonBary.x;
      const bB = polygonBary.y;
      const bC = polygonBary.z;
      const baryId = Math.ceil(bA) | Math.ceil(bB) << 1 | Math.ceil(bC) << 2;
      const primitiveIds = lookUpTableBaryToPrim[baryId];
      let upsampledIndex;
      let isNewVertex = false;
      if (primitiveIds.length === 1) {
        const pointPrimitiveId = primitiveIds[0];
        const pointIndex = indices[i + pointPrimitiveId];
        const pointKey = pointIndex;
        upsampledIndex = upsampledVertexMap[pointKey];
        if (upsampledIndex === void 0) {
          isNewVertex = true;
          upsampledIndex = upsampledVertexCount++;
          upsampledVertexMap[pointKey] = upsampledIndex;
        }
      } else if (primitiveIds.length === 2) {
        const edgePrimitiveIdA = primitiveIds[0];
        const edgePrimitiveIdB = primitiveIds[1];
        const edgeIndexA = indices[i + edgePrimitiveIdA];
        const edgeIndexB = indices[i + edgePrimitiveIdB];
        const prevBary = clippedPolygon.barycentricCoordinates[(p + clippedPolygonLength - 1) % clippedPolygonLength];
        const prevBaryId = Math.ceil(prevBary.x) | Math.ceil(prevBary.y) << 1 | Math.ceil(prevBary.z) << 2;
        const sameEdge = baryId === prevBaryId;
        const minIndex = Math.min(edgeIndexA, edgeIndexB);
        const maxIndex = Math.max(edgeIndexA, edgeIndexB);
        const baseKey = vertexCount + 2 * (minIndex * vertexCount + maxIndex);
        const firstKey = baseKey + 0;
        const secondKey = baseKey + 1;
        const firstEntry = upsampledVertexMap[firstKey];
        const secondEntry = upsampledVertexMap[secondKey];
        const useFirst = !sameEdge === (firstEntry === void 0 || secondEntry === void 0);
        upsampledIndex = useFirst ? firstEntry : secondEntry;
        if (upsampledIndex === void 0) {
          isNewVertex = true;
          upsampledIndex = upsampledVertexCount++;
          const edgeKey = useFirst ? firstKey : secondKey;
          upsampledVertexMap[edgeKey] = upsampledIndex;
        }
      } else {
        isNewVertex = true;
        upsampledIndex = upsampledVertexCount++;
      }
      polygonUpsampledIndices[p] = upsampledIndex;
      if (isNewVertex) {
        const triId = i / 3;
        resultTriIds.push(triId);
        const polygonUV = clippedPolygon.coordinates[p];
        const u = (polygonUV.x - minU) / (maxU - minU);
        const v = (polygonUV.y - minV) / (maxV - minV);
        resultUVs.push(u, v);
        resultBary.push(bA, bB);
        if (u === 0) {
          resultWestIndices.push(upsampledIndex);
        } else if (u === 1) {
          resultEastIndices.push(upsampledIndex);
        }
        if (v === 0) {
          resultSouthIndices.push(upsampledIndex);
        } else if (v === 1) {
          resultNorthIndices.push(upsampledIndex);
        }
      }
    }
    const ui0 = polygonUpsampledIndices[0];
    let ui1 = polygonUpsampledIndices[1];
    let ui2 = polygonUpsampledIndices[2];
    resultIndices.push(ui0, ui1, ui2);
    for (let j = 3; j < clippedPolygonLength; j++) {
      ui1 = ui2;
      ui2 = polygonUpsampledIndices[j];
      resultIndices.push(ui0, ui1, ui2);
    }
  }
  resultWestIndices.sort(function(a, b) {
    return resultUVs[a * 2 + 1] - resultUVs[b * 2 + 1];
  });
  resultSouthIndices.sort(function(a, b) {
    return resultUVs[b * 2 + 0] - resultUVs[a * 2 + 0];
  });
  resultEastIndices.sort(function(a, b) {
    return resultUVs[b * 2 + 1] - resultUVs[a * 2 + 1];
  });
  resultNorthIndices.sort(function(a, b) {
    return resultUVs[a * 2 + 0] - resultUVs[b * 2 + 0];
  });
}
var Cesium3DTilesTerrainGeometryProcessor_default = Cesium3DTilesTerrainGeometryProcessor;

export {
  Cesium3DTilesTerrainGeometryProcessor_default
};
