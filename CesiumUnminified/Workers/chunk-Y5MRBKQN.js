/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.138.0
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
} from "./chunk-WHLGBMBC.js";
import {
  EllipsoidalOccluder_default,
  TerrainEncoding_default,
  VerticalExaggeration_default
} from "./chunk-D63Z7KKL.js";
import {
  WebMercatorProjection_default
} from "./chunk-N6XBJBI7.js";
import {
  OrientedBoundingBox_default
} from "./chunk-6WDMPXQ7.js";
import {
  AttributeCompression_default
} from "./chunk-4R6FGUFP.js";
import {
  AxisAlignedBoundingBox_default
} from "./chunk-EY5HOJFQ.js";
import {
  IntersectionTests_default,
  Ray_default
} from "./chunk-FDOLXORR.js";
import {
  BoundingSphere_default,
  Interval_default
} from "./chunk-E4YDCSQK.js";
import {
  Event_default,
  Rectangle_default,
  Resource_default,
  Transforms_default,
  binarySearch_default,
  buildModuleUrl_default,
  isCrossOriginUrl_default,
  require_URI
} from "./chunk-S2KVL7OJ.js";
import {
  Matrix4_default
} from "./chunk-LWZHJWYK.js";
import {
  ComponentDatatype_default
} from "./chunk-EOSX23OS.js";
import {
  RuntimeError_default
} from "./chunk-VRAAQ3FS.js";
import {
  Cartesian2_default,
  Cartographic_default,
  Ellipsoid_default,
  FeatureDetection_default
} from "./chunk-7SLNBIZS.js";
import {
  Cartesian3_default,
  Frozen_default,
  Matrix3_default
} from "./chunk-LYBNPUEI.js";
import {
  Math_default
} from "./chunk-BO22JHBX.js";
import {
  Check_default,
  DeveloperError_default
} from "./chunk-FS42VX2H.js";
import {
  __toESM,
  defined_default
} from "./chunk-7U5YNLF3.js";

// node_modules/meshoptimizer/meshopt_encoder.js
var MeshoptEncoder = (function() {
  var wasm = "b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuec;G:Qdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq:p28Adbk:Bhdhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;m:kjjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8AarcUf9cb83ibarc8Wf9cb83ibarcyf9cb83ibarcaf9cb83ibarcKf9cb83ibarczf9cb83ibar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzarc;qofcKfhHarc;qofczfhOcbhAincdhCcbhodnavci6mbaH9cb83ibaO9cb83ibar9cb83i;yoar9cb83i;qoadaAfgoybbhXcbhQincbhwcbhLdninaoalfhKaoybbgYaX7aLVhLawcP0meaKhoaYhXawcefgwaQfai6mbkkcbhXarc;qofhwincwh8AcwhEdnaLaX93gocFeGg3cs0mbclhEa3ci0mba3cb9hcethEkdnaocw4cFeGg3cs0mbclh8Aa3ci0mba3cb9hceth8Aka8AaEfh3awydbh5cwh8AcwhEdnaocz4cFeGg8Ecs0mbclhEa8Eci0mba8Ecb9hcethEka3a5fh3dnaocFFFFb0mbclh8AaocFFF8F0mbaocFFFr0ceth8Akawa3aEfa8AfBdbawclfhwaXcefgXcw9hmbkaKhoaYhXaQczfgQai6mbkcbhocehwazhLinawaoaLydbarc;qofaocdtfydb6EhoaLclfhLawcefgwcw9hmbkcihCkcbh3arc;qlfcbcjdz:xjjjb8Aarc;alfcwfcbBdbar9cb83i;alaoclth8Fadhaaqhhakh5inarc;qlfadcba3cufgoaoa30Eal2falz:wjjjb8Aaiahaiah6Ehgdnaqaia39Ra3aqfai6EgYcsfc9WGgoaY9nmbarc;qofaYfcbaoaY9Rz:xjjjb8Akada3al2fh8Jcbh8Kina8Ka8FVcl4hQarc;alfa8Kcdtfh8LaAh8Mcbh8Nina8NaAfhwdndndndndndna8KPldebidkasa8Mc98GgLfhoa5aLfh8Aarc;qlfawc98GgLfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkaYTmla8Ncith8Ea8JaLfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aQ93a8E486bba8Aalfh8AaEalfhEaLhXaKcefgKaY9hmbxlkkaYTmia8Mc9:Ghoa8NcitcwGhEarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhLarc;qofhwaghXinawa5aofRbbcwtaaaofRbbVg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbaoalfhoawcefhwa8AhLa3aXcufgX9hmbxikkaYTmda8Jawfhoarc;qlfawfRbbhLarc;qofhwaghXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLa3aXcufgX9hmbxdkkaYTmeka8LydbhEcbhKarc;qofhoincdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egwa8Aawa8A6Egwczawcz6EaEfhEaoczfhoaKczfgKaY6mbka8LaEBdbka8Mcefh8Ma8Ncefg8Ncl9hmbka8Kcefg8KaC9hmbkaaamfhaahaxfhha5amfh5a3axfg3ai6mbkcbhocehwaPhLinawaoaLydbarc;alfaocdtfydb6EhoaLclfhLawcefgXhwaCaX9hmbkaraAcd4fa8FcdVaoaocdSE86bbaAclfgAal6mbkkabaefh8Kabcefhoalcd4gecbaDEhkadcefhOarc;abfceVhHcbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aa8Kao9Rak6mdadamal2gwfhxcbh8JaOawfhzaocbakz:xjjjbghakfh5aqaiam9Ramaqfai6Egscsfgocl4cifcd4hCaoc9WGg8LThPindndndndndndndndndndnaDTmbara8Jcd4fRbbgLciGPlbedlbkasTmdaxa8Jfhoarc;abfa8JfRbbhLarc;qofhwashXinawaoRbbg8AaL9RgLcetaLcKtcK91cr4786bbawcefhwaoalfhoa8AhLaXcufgXmbxikkasTmia8JcitcwGhEarc;abfa8JceVfRbbcwtarc;abfa8Jc9:GgofRbbVhLaxaofhoarc;qofhwashXinawao8Vbbg8AaL9RgLcetaLcztcz91cs47cFFiGaE486bbawcefhwaoalfhoa8AhLaXcufgXmbxdkkaHa8Jc98GgEfhoazaEfh8Aarc;abfaEfRbbhXcwhwinaoRbbawtaXVhXaocefhoawcwfgwca9hmbkasTmbaLcl4hYa8JcitcKGh3axaEfhEcbhKinaERbbhLcwhoa8AhwinawRbbaotaLVhLawcefhwaocwfgoca9hmbkarc;qofaKfaLaX7aY93a3486bba8Aalfh8AaEalfhEaLhXaKcefgKas9hmbkkaDmbcbhoxlka8LTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8L9pmdxbkkdnavmbcehoxikcbhEaChKaChYinarc;qofaEfgocwf8Pibhyao8Pibh8PcdhLcbhwinaLaoawfRbbcb9hfhLawcefgwcz9hmbkclhXcbhwinaXaoawfRbbcd0fhXawcefgwcz9hmbkcwh8Acbhwina8AaoawfRbbcP0fh8Aawcefgwcz9hmbkaLaXaLaX6Egoa8Aaoa8A6Egoczaocz6EaYfhYaocucbaya8P:e9cb9sEgwaoaw6EaKfhKaEczfgEa8L9pmdxbkkaha8Jcd4fgoaoRbbcda8JcetcoGtV86bbxikdnaKas6mbaYas6mbaha8Jcd4fgoaoRbbcia8JcetcoGtV86bba8Ka59Ras6mra5arc;qofasz:wjjjbasfh5xikaKaY9phokaha8Jcd4fgwawRbbaoa8JcetcoGtV86bbka8Ka59RaC6mla5cbaCz:xjjjbgAaCfhYdndna8LmbaPhoxekdna8KaY9RcK9pmbaPhoxekaocdtc:q1jjbfcj1jjbaDEg5ydxggcetc;:FFFeGh8Fcuh3cuagtcu7cFeGhacbh8Marc;qofhLinarc;qofa8MfhQczhEdndndnagPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhExekcbhoa8FhEinaEaaaLaofRbb9nfhEaocefgocz9hmbkkcih8Ecbh8Ainczhwdndndna5a8AcdtfydbgKPDbeeeeeeedekcucbaQcwf8PibaQ8Pib:e9cb9sEhwxekaKcetc;:FFFeGhwcuaKtcu7cFeGhXcbhoinawaXaLaofRbb9nfhwaocefgocz9hmbkkdndnawaE6mbaKa39hmeawaE9hmea5a8EcdtfydbcwSmeka8Ah8EawhEka8Acefg8Aci9hmbkaAa8Mco4fgoaoRbba8Ea8Mci4coGtV86bbdndndna5a8Ecdtfydbg3PDdbbbbbbbebkdncwa39Tg8ETmbcua3tcu7hwdndna3ceSmbcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXa3tVhXaocefhoa8Acufg8AmbkaYaX86bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbxdkkcbh8NaLhQinaQhoa8Eh8AcbhXinaoRbbgEawcFeGgKaEaK6EaXcetVhXaocefhoa8Acufg8AmbkaYaX:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaQa8EfhQaYcefhYa8Na8Efg8Ncz6mbkkcbhoinaYaLaofRbbgX86bbaYaXawcFeG9pfhYaocefgocz9hmbxikkdna3ceSmbinaYcb86bbaYcefhYxbkkinaYcb86bbaYcefhYxbkkaYaQ8Pbb83bbaYcwfaQcwf8Pbb83bbaYczfhYka8Mczfg8Ma8L9pgomeaLczfhLa8KaY9RcK9pmbkkaoTmlaYh5aYTmlka8Jcefg8Jal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma5hoa5mbkcbhwxdkdna8Kao9RakalfgwcKcaaDEgLawaL0EgX9pmbcbhwxdkdnawaL9pmbaocbaXaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoaraez:wjjjbaefhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;m:kjjbz:bjjjbk9reduaecd4gdaefgicaaica0Eabcj;abae9Uc;WFbGcjdaeca0Egifcufai9Uae2aiadfaicl4cifcd4f2fcefkmbcbabBd;m:kjjbk:Ese5u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd;q:kjjbgrc;GeV86bbalc;abfcFecjez:xjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgLydbhKaLcwfydbhYaLclfydbh8AcbhEdndndninalc;abfavcsGcitfgoydlh3dndndnaoydbgoaK9hmba3a8ASmekdnaoa8A9hmba3aY9hmbaEcefhExekaoaY9hmea3aK9hmeaEcdfhEkaEc870mdaXcufhvaLaEciGcx2goc;i1jjbfydbcdtfydbh3aLaoc;e1jjbfydbcdtfydbh8AaLaoc;a1jjbfydbcdtfydbhKcbhodnindnalavcsGcdtfydba39hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaOa3aOSgvaYce9iaYaH9oVgoGfhOdndndncbcsavEaYaoEgvcs9hmbarce9imba3a3aAa3cefaASgvEgAcefSmecmcsavEhvkasavaEcdtc;WeGV86bbavcs9hmea3aA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbka3hAxvkcPhvasaEcdtcPV86bba3hAkavTmiavaH9omicdhocehEaQhYxlkavcufhvaEclfgEc;ab9hmbkkdnaLceaYaOSceta8AaOSEcx2gvc;a1jjbfydbcdtfydbgKTaLavc;e1jjbfydbcdtfydbg8AceSGaLavc;i1jjbfydbcdtfydbg3cdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhYxdkcuhYaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydba39hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaKaOSg8EfhLdndnaYcm0mbaYcefhYxekcbcsa8AaLSgvEhYaLavfhLkdndnaEcm0mbaEcefhExekcbcsa3aLSgvEhEaLavfhLkc9:cua8EEh8FcbhvaEaYcltVgacFeGhodndndninavc:W1jjbfRbbaoSmeavcefgvcz9hmbxdkka5aKaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeaa86bbaecefhekdna8EmbaKaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaKhAkdnaYcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmba3aA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka3hAkalaXcdtfaKBdbaXcefcsGhvdndnaYPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfa3BdbavcefcsGhvkcihoalc;abfaQcitfgEaKBdlaEa8ABdbaQcefcsGhYcdhEavhXaLhOxekcdhoalaXcdtfa3BdbcehEaXcefcsGhXaQhYkalc;abfaYcitfgva8ABdlava3Bdbalc;abfaQaEfcsGcitfgva3BdlavaKBdbascefhsaQaofcsGhQaCcifgCai6mbkkdnaeaP9nmbcbhvxekcbhvinaeavfavc:W1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;q:kjjbk:Adewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb;q:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkdnaoar9nmbcbskaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:bvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhrdndnakJbbbb9GTmbaxhqxekJbbjZar:l:tgqaq:maxJbbbb9GEhqJbbjZax:l:tgxax:marJbbbb9GEhrkdndnalcxfIdbgxJbbj:;axJbbj:;9GEgkJbbjZakJbbjZ9FEavNJbbbZJbbb:;axJbbbb9GEMgx:lJbbb9p9DTmbax:Ohmxekcjjjj94hmkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEaoNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;3viDue99eu8Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6meaohwarhDinawc:CuBdbawclfhwaDcufgDmbkaeTmiadcl6mdarcdthqalhkcbhxinaohwakhDarhminawawydbgPcbaDIdbgs:8cL4cFeGc:cufasJbbbb9BEgzaPaz9kEBdbaDclfhDawclfhwamcufgmmbkakaqfhkaxcefgxaeSmixbkkaeTmdxekaeTmekarcdthkavce9hhqadcl6hdcbhxindndndnaqmbadmdc:CuhDalhwarhminaDcbawIdbgs:8cL4cFeGc:cufasJbbbb9BEgPaDaP9kEhDawclfhwamcufgmmbxdkkc:CuhDdndnavPleddbdkadmdaohwalhmarhPinawcbamIdbgs:8cL4cFeGgzc;:bazc;:b0Ec:cufasJbbbb9BEBdbamclfhmawclfhwaPcufgPmbxdkkadmecbhwarhminaoawfcbalawfIdbgs:8cL4cFeGgPc8AaPc8A0Ec:cufasJbbbb9BEBdbawclfhwamcufgmmbkkadmbcbhwarhPinaDhmdnavceSmbaoawfydbhmkdndnalawfIdbgscjjj;8iamai9RcefgmcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:Ohzxekcjjjj94hzkabawfazcFFFrGamcKtVBdbawclfhwaPcufgPmbkkabakfhbalakfhlaxcefgxae9hmbkkaocjdf8Kjjjjbk:Ylvdud99due99iudnaeTmbceaicufgvthocuaitcu7:Zhrcuavtcu7:Zhwcbhvadcl9hhDcbhqindndnalcwfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikdndnalIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9TgxaifhidndnalclfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEarNJbbbZMgk:lJbbb9p9DTmbak:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgkJbbbbakJbbbb9GEgkJbbjZakJbbjZ9FEawNJbbbZMgk:lJbbb9p9DTmbak:Ohmxekcjjjj94hmkadaifhiaoamVhmdndnaDmbabavfgPai86bbaPcifam86bbaPcdfad86bbaPcefax86bbxekabaqfgPai87ebaPcofam87ebaPclfad87ebaPcdfax87ebkalczfhlavclfhvaqcwfhqaecufgembkkk;YqdXui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AcbhodnadTmbcbhoaiTmbdndnabaeSmbaehrxekavcuadcdtgwadcFFFFi0Ecbyd;u:kjjbHjjjjbbgrBd:SeavceBd:mdaraeawz:wjjjb8Akavc:GefcwfcbBdbav9cb83i:Geavc:Gefaradaiavc:Sefz:pjjjbavyd:GehDadci9Ugqcbyd;u:kjjbHjjjjbbheavc:Sefavyd:mdgkcdtfaeBdbavakcefgwBd:mdaecbaqz:xjjjbhxavc:SefawcdtfcuaicdtaicFFFFi0Ecbyd;u:kjjbHjjjjbbgmBdbavakcdfgPBd:mdalc;ebfhsaDheamhwinawalIdbasaeydbgzcwazcw6EcdtfIdbMUdbaeclfheawclfhwaicufgimbkavc:SefaPcdtfcuaqcdtadcFFFF970Ecbyd;u:kjjbHjjjjbbgPBdbdnadci6mbarheaPhwaqhiinawamaeydbcdtfIdbamaeclfydbcdtfIdbMamaecwfydbcdtfIdbMUdbaecxfheawclfhwaicufgimbkkakcifhoalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhzcbhwcbhXcehQinaehLcihkarawci2gKcdtfgeydbhsaeclfydbhdabaXcx2fgicwfaecwfydbgYBdbaiclfadBdbaiasBdbaxawfce86bbaOaYBdwaOadBdlaOasBdbaPawcdtfcbBdbdnazTmbcihkaLhiinaOakcdtfaiydbgeBdbakaeaY9haeas9haead9hGGfhkaiclfhiazcufgzmbkkaXcefhXcbhzinaCaAarazaKfcdtfydbcdtgifydbcdtfgYheaDaifgdydbgshidnasTmbdninaeydbawSmeaeclfheaicufgiTmdxbkkaeaYascdtfc98fydbBdbadadydbcufBdbkazcefgzci9hmbkdndnakTmbcuhwJbbbbh8Acbhdavyd:KehYavyd:OehKindndnaDaOadcdtfydbcdtgzfydbgembadcefhdxekadcs0hiamazfgsIdbhEasalcbadcefgdaiEcdtfIdbaHaecwaecw6EcdtfIdbMg3Udba3aE:th3aecdthiaKaYazfydbcdtfheinaPaeydbgzcdtfgsa3asIdbMgEUdbaEa8Aa8AaE9DgsEh8AazawasEhwaeclfheaic98fgimbkkadak9hmbkawcu9hmekaQaq9pmdindnaxaQfRbbmbaQhwxdkaqaQcefgQ9hmbxikkakczakcz6EhzaOheaLhOawcu9hmbkkaocdtavc:Seffc98fhedninaoTmeaeydbcbyd;y:kjjbH:bjjjbbaec98fheaocufhoxbkkavc:qdf8Kjjjjbk;IlevucuaicdtgvaicFFFFi0Egocbyd;u:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;u:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;u:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8Aadci9UhDdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic;K1jjbz:ojjjbkQbabaeadaic;m:jjjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:Vvioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;u:kjjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;u:kjjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkclhvdninavc98Smealcxfavfydbcbyd;y:kjjbH:bjjjbbavc98fhvxbkkalc;Waf8Kjjjjbk:Jwliuo99iud9:cbhv8Jjjjjbca9Rgoczfcwfcbyd:8:kjjbBdbaocb8Pd:0:kjjb83izaocwfcbyd;i:kjjbBdbaocb8Pd;a:kjjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;C:kjjbgeabcifc98GfgbBd;C:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;C:kjjbgeabcrfc94GfgbBd;C:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;C:kjjbge9Rcifc98GaefgbBd;C:kjjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk;Uddbcjwk;mdbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;mqkCebbbebbbebbbdbbb9G:vbb";
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
    instance.exports.meshopt_encodeVertexVersion(1);
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
      return encode(instance.exports.meshopt_encodeVertexBufferLevel, bound, source, count, size, level, version === void 0 ? -1 : version);
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
    encodeGltfBuffer: function(source, count, size, mode, version) {
      var table = {
        ATTRIBUTES: this.encodeVertexBufferLevel,
        TRIANGLES: this.encodeIndexBuffer,
        INDICES: this.encodeIndexSequence
      };
      assert(table[mode]);
      return table[mode](
        source,
        count,
        size,
        /* level= */
        2,
        version === void 0 ? 0 : version
      );
    },
    encodeFilterOct: function(source, count, stride, bits) {
      assert(stride == 4 || stride == 8);
      assert(bits >= 2 && bits <= 16);
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

// node_modules/meshoptimizer/meshopt_decoder.mjs
var MeshoptDecoder = (function() {
  var wasm_base = "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuec:W:Odkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq;lZkdbk;jYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbhodnawTmbaxa8Acd4fRbbhokaocFeGh5cbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q1jjbfcj1jjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bbarcwf9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfag9c8F1:NghcKtc8F91aicdfa8J9c8N1:Nfg8KRbbG86bbarcVfcba8KahcjeGcr4fghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fag9c8F1:NgicKtc8F91aha8J9c8N1:NfghRbbG86bbarc96fcbahaicjeGcr4fgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbb83bbarcwfaicwf8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbcbaocl49Rh8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E93aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:XseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk::ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxabaiarcefciGfcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGfgkcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabaiarcufciGfcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkabakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K1jjbgeabcifc98GfgbBd:K1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk81dbcjwk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:Kwkl8WNbb";
  var wasm_simd = "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuec:q:6dkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:Ctklbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk:183lYud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxavaialfgmar9Rgoad;8qbbcj;abad9Uc;WFbGcjdadca0EhPdndndnadTmbaoadfhscbhzinaeaz9nmdamax9RaD6miabazad2fhHaxaDfhOaPaeaz9RazaPfae6EgAcsfgocl4cifcd4hCavcj;cbfaoc9WGgXcetfhQavcj;cbfaXci2fhLavcj;cbfaXfhKcbhYaoc;ab6h8AincbhodnawTmbaxaYcd4fRbbhokaocFeGhEcbh3avcj;cbfh5indndndndnaEa3cet4ciGgoc9:fPdebdkamaO9RaX6mwavcj;cbfa3aX2faOaX;8qbbaOaAfhOxdkavcj;cbfa3aX2fcbaX;8kbxekamaO9RaC6moaoclVcbawEhraOaCfhocbhidna8Ambamao9Rc;Gb6mbcbhlina5alfhidndndndndndnaOalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaiczfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaoclffahc:q:yjjbfRbbfhoxikaicafaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaaaocwffahc:q:yjjbfRbbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaaaocdffahc:q:yjjbfRbbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaoclffaqc:q:yjjbfRbbfhoxikaic8Wfaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngicitc:q1jjbfpbibaic:q:yjjbfRbbgipsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spklbaiaocwffaqc:q:yjjbfRbbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitc:q1jjbfpbibaic:q:yjjbfRbbgipsaoRbegqcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqc:q:yjjbfRbbfhokalc;abfhialcjefaX0meaihlamao9Rc;Fb0mbkkdnaiaX9pmbaici4hlinamao9RcK6mwa5aifhqdndndndndndnaOaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLg8Ecdp:mea8EpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9og8Fpxiiiiiiiiiiiiiiiip8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaoclffahc:q:yjjbfRbbfhoxikaqaopbbwaopbbbg8Eclp:mea8EpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9og8Fpxssssssssssssssssp8Jg8Ep5b9cjF;8;4;W;G;ab9:9cU1:Ngacitc:q1jjbfpbibaac:q:yjjbfRbbgapsa8Ep5e9cjF;8;4;W;G;ab9:9cU1:Nghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPa8Fa8Ep9spkbbaaaocwffahc:q:yjjbfRbbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbgacitc:q1jjbfpbibaac:q:yjjbfRbbgapsaoRbeghcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPpkbbaaaocdffahc:q:yjjbfRbbfhokalcdfhlaiczfgiaX6mbkkaohOaoTmoka5aXfh5a3cefg3cl9hmbkdndndndnawTmbasaYcd4fRbbglciGPlbedwbkaXTmdavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep9Ta8Epxeeeeeeeeeeeeeeeeg8Fp9op9Hp9rg8Eagp9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Uggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp9Uggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp9Uggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep9Ta8Ea8Fp9op9Hp9rg8Ep9Ug8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9Ug8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9Uggp9AbbbaladfhlaoczfgoaX6mbxikkaXTmeavcjdfaYfhlavaYfpbdbhgcbhoinalavcj;cbfaofpblbg8JaKaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaQaofpblbg8MaLaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Ecep:nea8Epxebebebebebebebebg8Fp9op:bep9rg8Eagp:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8LaypmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeggp9Abbbaladfglaga8Ea8Epmlvorlvorlvorlvorp:oeggp9Abbbaladfglaga8Ea8EpmwDqkwDqkwDqkwDqkp:oeggp9Abbbaladfglaga8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9Abbbaladfglaga8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Ecep:nea8Ea8Fp9op:bep9rg8Ep:oeg8Fp9Abbbaladfgla8Fa8Ea8Epmlvorlvorlvorlvorp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmwDqkwDqkwDqkwDqkp:oeg8Fp9Abbbaladfgla8Fa8Ea8EpmxmPsxmPsxmPsxmPsp:oeggp9AbbbaladfhlaoczfgoaX6mbxdkkaXTmbcbhocbalcl4gl9Rc8FGhiavcjdfaYfhravaYfpbdbh8Finaravcj;cbfaofpblbggaKaofpblbg8JpmbzeHdOiAlCvXoQrLg8KaQaofpblbg8LaLaofpblbg8MpmbzeHdOiAlCvXoQrLg8NpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ea8Fp9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Fa8Ka8NpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwKDYq8AkEx3m5P8Es8Fgga8La8MpmwKDYq8AkEx3m5P8Es8Fg8JpmbezHdiOAlvCXorQLg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9Abbbaradfgra8Faga8JpmwDKYqk8AExm35Ps8E8Fg8Eaip:Rea8Ealp:Sep9qg8Ep9rg8Fp9Abbbaradfgra8Fa8Ea8Epmlvorlvorlvorlvorp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmwDqkwDqkwDqkwDqkp9rg8Fp9Abbbaradfgra8Fa8Ea8EpmxmPsxmPsxmPsxmPsp9rg8Fp9AbbbaradfhraoczfgoaX6mbkkaYclfgYad6mbkaHavcjdfaAad2;8qbbavavcjdfaAcufad2fad;8qbbaAazfhzc9:hoaOhxaOmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdaPaeao9RaoaPfae6Eaofgoae6mbkaial9Rhxkcbc99amax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbk:TseHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiaPfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaOfhiazaOfhxxekaxcbalRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhAascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhzaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkaOhlxekalcefhlkaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDclfaO87ebaDcdfaz87ebxekabarcdtfgDaABdbaDcwfaOBdbaDclfazBdbkavc;abfaocitfgDazBdbaDaABdlavaicdtfaABdbavc;abfaocefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfaocdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnaecvfal9nmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:2Pliur97eue978Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalaeSmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskaipxFubbFubbFubbFubbgxpklbdnalTmbcbhvabhdinadczfgmampbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblbaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oaoarpmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgopklbaiaopklbaiabalcitfgdaeciGglcitgv;8qbbaiaxpkladnalTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmbediwDqkzHOAKY8AEgwczp:Reczp:Sep;6egraipblaaDaopmlvorxmPsCXQL358E8Fp9op;6eawczp:Sep;6egwp;Gearp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgPp9op9rp;Kegrpxb;:FSb;:FSb;:FSb;:FSararp;Meaoaop;MeawaqawaPp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFFbbFFbbFFbbFFbbp9oaoawp;Meaqp;Keczp:Rep9qgoarawp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogrpmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oaoarpmbezHdiOAlvCXorQLp9qpklbkadaiav;8qbbkk:Iwllue97euo978Jjjjjbca9Rhidnaec98GglTmbcbhvabhoinaocKfpx:ji:1S:ji:1S:ji:1S:ji:1SaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83ibawarp5bampEd:T:j83ibaocwfaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83ibaoaxp5bampEb:T:j83ibaocafhoavclfgval6mbkkdnalaeSmbaiczfpxbbbbbbbbbbbbbbbbgmpklbaiampklbaiabalcitfgoaeciGgvcitgw;8qbbdnavTmbaipx:ji:1S:ji:1S:ji:1S:ji:1SaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkpxibbbibbbibbbibbbp9qgxp;6ep;Negmaxaxp:1ep;7egxaxp;KearaDpmbediwDqkzHOAKY8AEgxczp:Reczp:Sep;6egrarp;Meaxczp:Sep;6egDaDp;Meaqczp:Reczp:Sep;6egqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gxp;KepxFFbbFFbbFFbbFFbbgPp9oamaDp;Meaxp;Keczp:Rep9qgDamarp;Meaxp;KeaPp9oamaqp;Meaxp;Keczp:Rep9qgxpmwDKYqk8AExm35Ps8E8Fgrp5eakclp:RegmpEi:T:j83iKaiarp5bampEd:T:j83izaiaDaxpmbezHdiOAlvCXorQLgxp5eampEe:T:j83iwaiaxp5bampEb:T:j83ibkaoaiaw;8qbbkk;uddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnavalSmbaic8WfpxbbbbbbbbbbbbbbbbgopklbaicafaopklbaiczfaopklbaiaopklbaiabavcdtfgdalciGgecdtgv;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkadaiav;8qbbkk:CPvdue97euw97eu8Jjjjjbc8W9Rhiaec98Ghldndnadcl9hmbaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadpbbbhradpxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpkbbadczfhdaoclfgoal6mbkkalaeSmeaiavpklaaicafabalcdtfgdaeciGglcdtgo;8qbbaiavpklbdnalTmbaipblahraipxbbuJbbuJbbuJbbuJaipblbarcKp:Tep9qgwcep:Seawp9qgDcdp:SeaDp9qgDclp:SeaDp9qgqp;6ep;NegDarcwp:RecKp:SegkarpxFbbbFbbbFbbbFbbbgxp9ogmp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gPp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oaDamakp:Xearczp:RecKp:Segrp:Uep;6ep;MeaPp;Keaxp9op9qaDamakarp:Uep:Xep;6ep;MeaPp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qaDaqawcep:Rep9oawpxebbbebbbebbbebbbp9op9qp;6ep;MeaPp;KecKp:Rep9qpklakadaicafao;8qbbskaipxbbbbbbbbbbbbbbbbgvpklbdnalTmbcbhoabhdinadczfgspxbFu9hbFu9hbFu9hbFu9hadpbbbgDaspbbbgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblbp9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpkbbadaxarpmbezHdiOAlvCXorQLpkbbadcafhdaoclfgoal6mbkkalaeSmbaiczfpxbbbbbbbbbbbbbbbbgrpklbaiarpklbaiabalcitfgdaeciGglcitgo;8qbbaiavpkladnalTmbaipxbFu9hbFu9hbFu9hbFu9haipblbgDaipblzgPpmlvorxmPsCXQL358E8Fgmczp:Teaipblap9qgrcep:Searp9qgwcdp:Seawp9qgwclp:Seawp9qgwcwp:Seawp9qgqp;6ep;NegwaDaPpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbgPp9ogkaDczp:Segxp:Ueamczp:Reczp:Segmp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gDp;KeaPp9oawakaxamp:Uep:Xep;6ep;MeaDp;Keczp:Rep9qgxawaqarcep:Rep9oarpxebbbebbbebbbebbbp9op9qp;6ep;MeaDp;Keczp:Reawamakp:Uep;6ep;MeaDp;KeaPp9op9qgrpmwDKYqk8AExm35Ps8E8FpklzaiaxarpmbezHdiOAlvCXorQLpklbkadaiao;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz:Dbb";
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
  function createWorker2(url) {
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
      workers[i] = createWorker2(url);
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

// node_modules/meshoptimizer/meshopt_simplifier.js
var MeshoptSimplifier = (function() {
  var wasm = "b9H79Tebbbe:6eO9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9Gluuuub9GiuuueuiLQdilvorlwDiqkxmPszbHHbelve9Weiiviebeoweuec:G:Pdkr:Bdxo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbxQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bmX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbPa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9Wbs59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9Wbzl79IV9RbHDwebcekdCXqM;YeQdbk;A1er3ue99euE99Que9:r998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:tjjjb8AdnabaeSmbabaeadcdtzMjjjb8AkdnamcdGTmbalcrfci4cbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd1:jjjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:tjjjbhQdnadTmbaecufhLcbhKindndnaQabaXcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaKcdtfaABdbaCaKBdbaKhHaKcefhKkaYaHBdbaXcefgXad9hmbkkaQcbyd:m:jjjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbhXasc:Cefasyd;8egecdtfaXBdbasaXBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd1:jjjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd1:jjjbHjjjjbbhAasc:Cefasyd;8egHcdtfaABdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhKasc:Cefasyd;8egHcdtfaKBdbasaHcefBd;8eaAaKaialavazasc:Cefz:djjjbalcbyd1:jjjbHjjjjbbh5asc:Cefasyd;8egHcdtfa5BdbasaHcefBd;8ea3cbyd1:jjjbHjjjjbbhHasc:Cefasyd;8egOcdtfaHBdbasaOcefBd;8ea3cbyd1:jjjbHjjjjbbhOasc:Cefasyd;8egCcdtfaOBdbasaCcefBd;8eaHcFeaez:tjjjbh8EaOcFeaez:tjjjbh8FdnalTmbaEcwfhaindnaXa8AgOcefg8AcdtfydbgCaXaOcdtgefydbgHSmbaCaH9RhhaEaHcitfhga8Faefh8Ja8Eaefh8KcbhQindndnagaQcitfydbgLaO9hmba8KaOBdba8JaOBdbxekdnaXaLcdtg8LfgeclfydbgHaeydbgeSmbaEaecitgCfydbaOSmeaHae9Rh8Maecu7aHfhYaaaCfhHcbheinaYaeSmeaecefheaHydbhCaHcwfhHaCaO9hmbkaea8M6meka8Fa8LfgeaOaLaeydbcuSEBdba8KaLaOa8KydbcuSEBdbkaQcefgQah9hmbkka8Aal9hmbkaAhHaKhOa8FhCa8EhQcbheindndnaeaHydbgL9hmbdnaeaOydbgL9hmbaQydbhLdnaCydbgYcu9hmbaLcu9hmba5aefcb86bbxikdnaYcuSmbaLcuSmbaeaYSmbaAaYcdtfydbaAaLcdtfydb9hmba5aefcd86bbxika5aefh8KdnaeaYSmbaeaLSmba8Kce86bbxika8Kcl86bbxdkdnaeaKaLcdtgYfydb9hmbdnaCydbg8KcuSmbaea8KSmbaQydbghcuSmbaeahSmba8FaYfydbggcuSmbagaLSmba8EaYfydbgYcuSmbaYaLSmbdnaAa8KcdtfydbgLaAaYcdtfydb9hmbaLaAahcdtfydbgYSmbaYaAagcdtfydb9hmba5aefcd86bbxlka5aefcl86bbxika5aefcl86bbxdka5aefcl86bbxeka5aefa5aLfRbb86bbkaHclfhHaOclfhOaCclfhCaQclfhQalaecefge9hmbkdnamcaGTmbaEcwfh8Jcbh8Nindndna5a8NfgyRbbg8Pc9:fPibebekdndndnaAa8Ncdtfydbgea8N9hmbdnaqmbcbhgxdkdnazTmbcbhga8NheinagaqazaecdtgefydbfRbbcdGce4VhgaKaefydbgea8N9hmbxikkcbhga8NheinagaqaefRbbcdGce4VhgaKaecdtfydbgea8N9hmbxdkka5aefRbbhexeka8NheindnaXaecdtgafgeclfydbgHaeydbgeSmbaHae9Rh8AaEaecitfh8MaAaafh8Lcbh8Kina8Ma8KcitfydbgYhednindnaXaecdtgLfgeclfydbgHaeydbgeSmbdnaAaEaecitgOfydbcdtfydba8LydbgQ9hmbcehexikaHae9Rhhaecu7aHfhCa8JaOfhHcbheinaCaeSmeaecefheaHydbhOaHcwfhHaAaOcdtfydbaQ9hmbkaeah6hexdkaKaLfydbgeaY9hmbkcbhekagaece7Vhga8Kcefg8Ka8A9hmbkkaKaafydbgea8N9hmbka8PciagceGEhekayae86bbka8Ncefg8Nal9hmbkkdnaqTmbdndnazTmbazheaAhHalhOindnaqaeydbfRbbceGTmba5aHydbfcl86bbkaeclfheaHclfhHaOcufgOmbxdkkaqheaAhHalhOindnaeRbbceGTmba5aHydbfcl86bbkaecefheaHclfhHaOcufgOmbkkaAhealhOa5hHindna5aeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaOcufgOmbkkamceGTmba5healhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcbhIcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhaasc:Cefasyd;8egecdtfaaBdbasaecefBd;8easc:qefcbBdbas9cb83i1eaaaialavazasc1efz:ejjjbh8RdndnaDmbcbhycbhCxekcbhCawhecbhHindnaeIdbJbbbb9ETmbasaCcdtfaHBdbaCcefhCkaeclfheaDaHcefgH9hmbkcuaCal2gecdtaecFFFFi0Ecbyd1:jjjbHjjjjbbhyasc:Cefasyd;8egecdtfayBdbasaecefBd;8ealTmbdnaCmbcbhCxekarcd4h8KdnazTmbaCcdthhcbhXayhYinaoazaXcdtfydba8K2cdtfhLasheaYhHaChOinaHaLaeydbcdtgQfIdbawaQfIdbNUdbaeclfheaHclfhHaOcufgOmbkaYahfhYaXcefgXal9hmbxdkkaCcdthhcbhXayhYinaoaXa8K2cdtfhLasheaYhHaChOinaHaLaeydbcdtgQfIdbawaQfIdbNUdbaeclfheaHclfhHaOcufgOmbkaYahfhYaXcefgXal9hmbkkcualc8S2gHalc;D;O;f8U0EgQcbyd1:jjjbHjjjjbbheasc:Cefasyd;8egOcdtfaeBdbasaOcefBd;8eaecbaHz:tjjjbh8ScbhDcbh8KdnaCTmbcbhIaQcbyd1:jjjbHjjjjbbh8Kasc:Cefasyd;8egecdtfa8KBdbasaecefBd;8ea8KcbaHz:tjjjb8AcuaCal2gecltgHaecFFFFb0Ecbyd1:jjjbHjjjjbbhDasc:Cefasyd;8egecdtfaDBdbasaecefBd;8eaDcbaHz:tjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd1:jjjbHjjjjbbhIasc:Cefasyd;8egHcdtfaIBdbasaHcefBd;8eaIcbaez:tjjjb8AkdnadTmbcbhLabhHinaaaHclfydbgXcx2fgeIdbaaaHydbgYcx2fgOIdbgR:tg8UaaaHcwfydbghcx2fgQIdlaOIdlg8V:tg8WNaQIdbaR:tg8XaeIdla8V:tg8YN:tg8Zh80aeIdwaOIdwg81:tgBa8XNaQIdwa81:tg83a8UN:tgUh8Xa8Ya83Na8WaBN:tg8Yh8Udna8Za8ZNa8Ya8YNaUaUNMM:rgBJbbbb9EgOTmba8ZaB:vh80aUaB:vh8Xa8YaB:vh8Uka8SaAaYcdtfydbgQc8S2fgea8UaB:rg8Wa8UNNg85aeIdbMUdbaea8Xa8Wa8XNg86Ng87aeIdlMUdlaea80a8Wa80Ng83Ng88aeIdwMUdwaea86a8UNg86aeIdxMUdxaea83a8UNg89aeIdzMUdzaea83a8XNg8:aeIdCMUdCaea8Ua8Wa80a81Na8UaRNa8Va8XNMM:mgZNg83Ng8UaeIdKMUdKaea8Xa83Ng8XaeId3MUd3aea80a83Ng80aeIdaMUdaaea83aZNg83aeId8KMUd8Kaea8WaeIdyMUdya8SaAaXcdtfydbgXc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdya8SaAahcdtfydbgYc8S2fgea85aeIdbMUdbaea87aeIdlMUdlaea88aeIdwMUdwaea86aeIdxMUdxaea89aeIdzMUdzaea8:aeIdCMUdCaea8UaeIdKMUdKaea8XaeId3MUd3aea80aeIdaMUdaaea83aeId8KMUd8Kaea8WaeIdyMUdydnaITmbdnaOTmba8ZaB:vh8ZaUaB:vhUa8YaB:vh8YkaIaQcltfgeaBJbbbZNg8UaUNg8WaeIdlMUdlaea8Ua8ZNg8XaeIdwMUdwaea8Ua8YNg80aeIdbMUdbaea8UaR:ma8YNaUa8VN:ta81a8ZN:tNg8UaeIdxMUdxaIaXcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxaIaYcltfgea8WaeIdlMUdlaea8XaeIdwMUdwaea80aeIdbMUdbaea8UaeIdxMUdxkaHcxfhHaLcifgLad6mbkkdnalTmbJ;n;m;m89J:v:;;w8ZamczGEh8YcbhOaAhQaahHa8SheindnaOaQydb9hmbaecxfgLaLIdbJbbbbMUdbaeczfgLaLIdbJbbbbMUdbaecCfgLaLIdbJbbbbMUdbaea8YaecyfgLIdbg8ZNg8UaeIdbMUdbaeclfgXa8UaXIdbMUdbaecwfgXa8UaXIdbMUdbaecKfgXaXIdbaHIdbg8Xa8UN:tUdbaHcwfIdbh8Waec3fgXaXIdba8UaHclfIdbg80N:tUdbaecafgXaXIdba8Ua8WN:tUdbaec8KfgXIdbhUaLa8Za8UMUdbaXaUa8Ua8Wa8WNa8Xa8XNa80a80NMMNMUdbkaQclfhQaHcxfhHaec8SfhealaOcefgO9hmbkkdnadTmbcbhhabhYinabahcdtfhXcbhHina5aXaHc:G1jjbfydbcdtfydbgOfRbbhedndna5aYaHfydbgQfRbbgLc99fcFeGcpe0mbaec99fcFeGc;:e6mekdnaLcufcFeGce0mba8EaQcdtfydbaO9hmekdnaecufcFeGce0mba8FaOcdtfydbaQ9hmekJbbacJbbacJbbbZaecFeGceSEaLcFeGceSEh88aaaOcx2fgeIdwaaaQcx2fgLIdwgB:tg80:mh86aeIdlaLIdlg83:tg8Z:mh89aeIdbaLIdbgR:tgU:mh8:dnaaaXaHc:K1jjbfydbcdtfydbcx2fgeIdwaB:tg8Va80a80NaUaUNa8Za8ZNMMg8YNa8Va80NaeIdbaR:tg81aUNa8ZaeIdla83:tg85NMMg8Wa80N:tg8Xa8XNa81a8YNa8WaUN:tg8Ua8UNa85a8YNa8Wa8ZN:tg8Wa8WNMM:rg87Jbbbb9ETmba8Xa87:vh8Xa8Wa87:vh8Wa8Ua87:vh8Uka88a8Y:rNg8Ya8XaBNa8UaRNa83a8WNMM:mgZNg87aZNhZa8Xa87Nhna8Wa87Nhca8Ua87Nh9ca8Ya8XNg87a8WNhJa87a8UNh9ea8Ya8WNgTa8UNhSa8Xa87Nh87a8WaTNhTa8Ua8Ya8UNNh9hdnaUa85Na81a89NMg8Xa8XNa8Za8VNa85a86NMg8Ua8UNa80a81Na8Va8:NMg8Wa8WNMM:rg80Jbbbb9ETmba8Xa80:vh8Xa8Wa80:vh8Wa8Ua80:vh8Uka8SaAaQcdtfydbc8S2fgeaeIdba9ha8Ua88a80:rNg80a8UNNMgUMUdbaeaTa8Wa80a8WNg8VNMg81aeIdlMUdlaea87a8Xa80a8XNg8ZNMg85aeIdwMUdwaeaSa8Va8UNMg8VaeIdxMUdxaea9ea8Za8UNMg87aeIdzMUdzaeaJa8Za8WNMg8ZaeIdCMUdCaea9ca8Ua80a8XaBNa8UaRNa83a8WNMMgB:mNg80NMg8UaeIdKMUdKaeaca8Wa80NMg8WaeId3MUd3aeana8Xa80NMg8XaeIdaMUdaaeaZaBa80N:tg80aeId8KMUd8Kaea8YJbbbbMg8YaeIdyMUdya8SaAaOcdtfydbc8S2fgeaUaeIdbMUdbaea81aeIdlMUdlaea85aeIdwMUdwaea8VaeIdxMUdxaea87aeIdzMUdzaea8ZaeIdCMUdCaea8UaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea80aeId8KMUd8Kaea8YaeIdyMUdykaHclfgHcx9hmbkaYcxfhYahcifghad6mbkaCTmbcbhYinJbbbbh8YaaabaYcdtfgeclfydbghcx2fgHIdwaaaeydbggcx2fgOIdwg81:tg8Wa8WNaHIdbaOIdbg85:tg8Xa8XNaHIdlaOIdlg87:tg80a80NMMgRaaaecwfydbgEcx2fgeIdwa81:tg8ZNa8Wa8Wa8ZNa8XaeIdba85:tgUNa80aeIdla87:tgBNMMg8UN:tJbbbbJbbjZaRa8Za8ZNaUaUNaBaBNMMg8VNa8Ua8UN:tg83:va83Jbbbb9BEg83Nh89a8Va8WNa8Za8UN:ta83Nh8:aRaBNa80a8UN:ta83NhZa8Va80NaBa8UN:ta83NhnaRaUNa8Xa8UN:ta83Nhca8Va8XNaUa8UN:ta83Nh9ca8XaBNaUa80N:tg8Ua8UNa80a8ZNaBa8WN:tg8Ua8UNa8WaUNa8Za8XN:tg8Ua8UNMM:rJbbbZNh8UayagaC2g8LcdtfhHayaEaC2g8JcdtfhOayahaC2g8AcdtfhQa81:mhJa87:mh9ea85:mhTcbhLaChXJbbbbhBJbbbbh83JbbbbhRJbbbbh8VJbbbbh81Jbbbbh85Jbbbbh87Jbbbbh88Jbbbbh86inascjdfaLfgecwfa8Ua8:aQIdbaHIdbg8Z:tg80Na89aOIdba8Z:tgUNMg8WNUdbaeclfa8Uana80NaZaUNMg8XNUdbaea8Ua9ca80NacaUNMg80NUdbaecxfa8UaJa8WNa9ea8XNa8ZaTa80NMMMg8ZNUdba8Ua8Wa8XNNa8VMh8Va8Ua8Wa80NNa81Mh81a8Ua8Xa80NNa85Mh85a8Ua8Za8ZNNa8YMh8Ya8Ua8Wa8ZNNaBMhBa8Ua8Xa8ZNNa83Mh83a8Ua80a8ZNNaRMhRa8Ua8Wa8WNNa87Mh87a8Ua8Xa8XNNa88Mh88a8Ua80a80NNa86Mh86aHclfhHaQclfhQaOclfhOaLczfhLaXcufgXmbka8Kagc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8Kahc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdya8KaEc8S2fgea86aeIdbMUdbaea88aeIdlMUdlaea87aeIdwMUdwaea85aeIdxMUdxaea81aeIdzMUdzaea8VaeIdCMUdCaeaRaeIdKMUdKaea83aeId3MUd3aeaBaeIdaMUdaaea8YaeId8KMUd8Kaea8UaeIdyMUdyaDa8LcltfhXcbhHaChQinaXaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgLaOclfIdbaLIdbMUdbaecwfgLaOcwfIdbaLIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaQcufgQmbkaDa8AcltfhXcbhHaChQinaXaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgLaOclfIdbaLIdbMUdbaecwfgLaOcwfIdbaLIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaQcufgQmbkaDa8JcltfhXcbhHaChQinaXaHfgeascjdfaHfgOIdbaeIdbMUdbaeclfgLaOclfIdbaLIdbMUdbaecwfgLaOcwfIdbaLIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaQcufgQmbkaYcifgYad6mbkkcbhOdndnamcwGg9imbJbbbbhRcbh6cbh9kcbh0xekcbh6a3cbyd1:jjjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ecua0alabadaAz:fjjjbgQcltaQcjjjjiGEcbyd1:jjjbHjjjjbbh9kasc:Cefasyd;8egecdtfa9kBdbasaecefBd;8ea9kaQa0aaalz:gjjjbJFFuuhRaQTmba9kheaQhHinaeIdbg8UaRaRa8U9EEhRaeclfheaHcufgHmbkaQh6kasydNeh9mdnalTmba9mclfhea9mydbhQa5hHalhLcbhOincbaeydbgXaQ9RaHRbbcpeGEaOfhOaHcefhHaeclfheaXhQaLcufgLmbkaOce4hOkcuadaO9Rcifg9ncx2a9nc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbh9oasc:Cefasyd;8egecdtfa9oBdbasaecefBd;8ecua9ncdta9ncFFFFi0Ecbyd1:jjjbHjjjjbbh9pasc:Cefasyd;8egecdtfa9pBdbasaecefBd;8ea3cbyd1:jjjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealcbyd1:jjjbHjjjjbbh9qasc:Cefasyd;8egecdtfa9qBdbasaecefBd;8eaxaxNa8RJbbjZamclGEgnanN:vh88Jbbbbh86dnadak9nmbdna9nci6mbasyd:yeh9raCclth9sa9ocwfh9tJbbbbh87Jbbbbh86inascNefabadalaAz:cjjjbabhgcbh8Ncbh3inaba3cdtfh8LcbheindnaAagaefydbgOcdtghfydbgQaAa8Laec:W1jjbfydbcdtfydbgHcdtgEfydbgLSmba5aHfRbbgYcv2a5aOfRbbgXfc;a1jjbfRbbg8AaXcv2aYfg8Jc;a1jjbfRbbg8MVcFeGTmbdnaLaQ9nmba8Jc;G1jjbfRbbcFeGmekdnaXcufcFeGce0mbaYTmba8EahfydbaH9hmekdnaXTmbaYcufcFeGce0mba8FaEfydbaO9hmeka9oa8Ncx2fgQaHaOa8McFeGgLEBdlaQaOaHaLEBdbaQaLa8AGcb9hBdwa8Ncefh8Nkaeclfgecx9hmbkdna3cifg3ad9pmbagcxfhga8Ncifa9n9nmekka8NTmdcbh8Jina8SaAa9oa8Jcx2fghydbgLcdtgQfydbggc8S2fgeIdwaaahydlgXcx2fgHIdwg8XNaeIdzaHIdbg80NaeIdaMg8Ua8UMMa8XNaeIdlaHIdlg8ZNaeIdCa8XNaeId3Mg8Ua8UMMa8ZNaeIdba80NaeIdxa8ZNaeIdKMg8Ua8UMMa80NaeId8KMMM:lh8UJbbbbJbbjZaeIdyg8W:va8WJbbbb9BEh8Wdndnahydwg8LmbJFFuuh83xekJbbbbJbbjZa8SaAaXcdtfydbc8S2fgeIdygU:vaUJbbbb9BEaeIdwaaaLcx2fgHIdwgUNaeIdzaHIdbg8YNaeIdaMgBaBMMaUNaeIdlaHIdlgBNaeIdCaUNaeId3MgUaUMMaBNaeIdba8YNaeIdxaBNaeIdKMgUaUMMa8YNaeId8KMMM:lNh83ka8Wa8UNhBdnaCTmba8KaLc8S2fgOIdwa8XNaOIdza80NaOIdaMg8Ua8UMMa8XNaOIdla8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8UayaXaC2gYcdtfhHaDaLaC2gEcltfheaOIdyhUaChOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8LmbJbbbbh8Wxeka8KaXc8S2fgOIdwaaaLcx2fgeIdwg80NaOIdzaeIdbg8ZNaOIdaMg8Wa8WMMa80NaOIdlaeIdlgUNaOIdCa80NaOId3Mg8Wa8WMMaUNaOIdba8ZNaOIdxaUNaOIdKMg8Wa8WMMa8ZNaOId8KMMMh8WayaEcdtfhHaDaYcltfheaOIdyh8YaChOinaHIdbg8Xa8Xa8YNaecxfIdba80aecwfIdbNa8ZaeIdbNaUaeclfIdbNMMMg8Xa8XM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8WkaBa8U:lMhBa83a8WMh83dndndna5aLfRbbc9:fPddbekaKaQfydbgQaLSmbaAaXcdtfydbhEindndna8EaQcdtgYfydbgecuSmbaAaecdtfydbaESmekdna8FaYfydbgecuSmbaAaecdtfydbaESmekaXheka8KaQc8S2fgOIdwaaaecx2fgHIdwg8XNaOIdzaHIdbg80NaOIdaMg8Ua8UMMa8XNaOIdlaHIdlg8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8UayaeaC2cdtfhHaDaQaC2cltfheaOIdyhUaChOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkaBa8U:lMhBaKaYfydbgQaL9hmbkka5aXfRbbci9hmea8LTmeaKaXcdtfydbgQaXSmeindndna8EaQcdtgYfydbgecuSmbaAaecdtfydbagSmekdna8FaYfydbgecuSmbaAaecdtfydbagSmekaLheka8KaQc8S2fgOIdwaaaecx2fgHIdwg8XNaOIdzaHIdbg80NaOIdaMg8Ua8UMMa8XNaOIdlaHIdlg8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8UayaeaC2cdtfhHaDaQaC2cltfheaOIdyhUaChOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbka83a8U:lMh83aKaYfydbgQaX9hmbxdkkdna8Fa8Ea8EaQfydbaXSEaKaQfydbgYcdtfydbgQcu9hmbaKaXcdtfydbhQka8KaYc8S2fgOIdwaaaQcx2fgeIdwg8XNaOIdzaeIdbg80NaOIdaMg8Ua8UMMa8XNaOIdlaeIdlg8ZNaOIdCa8XNaOId3Mg8Ua8UMMa8ZNaOIdba80NaOIdxa8ZNaOIdKMg8Ua8UMMa80NaOId8KMMMh8UayaQaC2ggcdtfhHaDaYaC2gEcltfheaOIdyhUaChOinaHIdbg8Wa8WaUNaecxfIdba8XaecwfIdbNa80aeIdbNa8ZaeclfIdbNMMMg8Wa8WM:tNa8UMh8UaHclfhHaeczfheaOcufgOmbkdndna8LmbJbbbbh8Wxeka8KaQc8S2fgOIdwaaaYcx2fgeIdwg80NaOIdzaeIdbg8ZNaOIdaMg8Wa8WMMa80NaOIdlaeIdlgUNaOIdCa80NaOId3Mg8Wa8WMMaUNaOIdba8ZNaOIdxaUNaOIdKMg8Wa8WMMa8ZNaOId8KMMMh8WayaEcdtfhHaDagcltfheaOIdyh8YaChOinaHIdbg8Xa8Xa8YNaecxfIdba80aecwfIdbNa8ZaeIdbNaUaeclfIdbNMMMg8Xa8XM:tNa8WMh8WaHclfhHaeczfheaOcufgOmbka8W:lh8WkaBa8U:lMhBa83a8WMh83kaha83aBa83aB9DgeEUdwahaLaXaea8Lcb9hGgeEBdlahaXaLaeEBdba8Jcefg8Ja8N9hmbkascjdfcbcj;qbz:tjjjb8Aa9thea8NhHinascjdfaeydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbcefBdbaecxfheaHcufgHmbkcbhecbhHinascjdfaefgOydbhQaOaHBdbaQaHfhHaeclfgecj;qb9hmbkcbhea9thHinascjdfaHydbcA4cF8FGgOcFAaOcFA6EcdtfgOaOydbgOcefBdba9paOcdtfaeBdbaHcxfhHa8Naecefge9hmbkadak9RgOci9Uh9udnalTmbcbhea8PhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh9va9qcbalz:tjjjbh9waOcO9Uh9xa9uce4h9ycbh3cbh8Adnina9oa9pa8Acdtfydbcx2fg8JIdwg8Ua889Emea3a9u9pmeJFFuuh8Wdna9ya8N9pmba9oa9pa9ycdtfydbcx2fIdwJbb;aZNh8Wkdna8Ua8W9ETmba8Ua869ETmba3a9x0mdkdna9waAa8Jydlg8Mcdtg9zfgEydbgQfg9ARbba9waAa8Jydbggcdtg9Bfydbgefg9CRbbVmba5agfRbbh9Ddna9maecdtfgHclfydbgOaHydbgHSmbaOaH9RhLaaaQcx2fhYaaaecx2fhha9raHcitfhecbhHceh8Ldnindna8PaeydbcdtfydbgOaQSmba8PaeclfydbcdtfydbgXaQSmbaOaXSmbaaaXcx2fgXIdbaaaOcx2fgOIdbg8X:tg8UahIdlaOIdlg80:tg8YNahIdba8X:tgBaXIdla80:tg8WN:tg8Za8UaYIdla80:tg83NaYIdba8X:tg8Va8WN:tg80Na8WahIdwaOIdwgU:tg81Na8YaXIdwaU:tg8XN:tg8Ya8WaYIdwaU:tg85Na83a8XN:tg8WNa8XaBNa81a8UN:tgUa8Xa8VNa85a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmdkaecwfheaHcefgHaL6h8LaLaH9hmbkka8LceGTmba9ycefh9yxekdndndndna9Dc9:fPdebdkagheinaEydbhOdndna8EaecdtgHfydbgecuSmbaAaecdtfydbaOSmekdna8FaHfydbgecuSmbaAaecdtfydbaOSmeka8Mheka8PaHfaeBdbaKaHfydbgeag9hmbxikkdna8Fa8Ea8Ea9Bfydba8MSEaKa9Bfydbggcdtfydbgecu9hmbaKa9zfydbheka8Pa9Bfa8MBdbaeh8Mka8Pagcdtfa8MBdbka9Cce86bba9Ace86bba8JIdwg8Ua86a86a8U9DEh86a9vcefh9vcecda9DceSEa3fh3ka8Acefg8Aa8N9hmbkka9vTmddnalTmbcbhXcbhhindna8PahcdtgefydbgOahSmbaAaOcdtfydbhgdnahaAaefydb9hgEmba8Sagc8S2fgea8Sahc8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdyaITmbaIagcltfgeaIahcltfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxkaCTmba8KaOc8S2fgea8Kahc8S2g8LfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9saO2hYaDhHaChQinaHaYfgeaHaXfgOIdbaeIdbMUdbaeclfgLaOclfIdbaLIdbMUdbaecwfgLaOcwfIdbaLIdbMUdbaecxfgeaOcxfIdbaeIdbMUdbaHczfhHaQcufgQmbkaEmbJbbbbJbbjZa8Sa8LfgeIdyg8U:va8UJbbbb9BEaeIdwaaagcx2fgHIdwg8UNaeIdzaHIdbg8WNaeIdaMg8Xa8XMMa8UNaeIdlaHIdlg8XNaeIdCa8UNaeId3Mg8Ua8UMMa8XNaeIdba8WNaeIdxa8XNaeIdKMg8Ua8UMMa8WNaeId8KMMM:lNg8Ua87a87a8U9DEh87kaXa9sfhXahcefghal9hmbkcbhHa8EheindnaeydbgOcuSmbdnaHa8PaOcdtgQfydbgO9hmbcuhOa8EaQfydbgQcuSmba8PaQcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkcbhHa8FheindnaeydbgOcuSmbdnaHa8PaOcdtgQfydbgO9hmbcuhOa8FaQfydbgQcuSmba8PaQcdtfydbhOkaeaOBdbkaeclfhealaHcefgH9hmbkka87a86aCEh87cbhHabhecbhOindnaAa8PaeydbcdtfydbgXcdtfydbgQaAa8PaeclfydbcdtfydbgYcdtfydbgLSmbaQaAa8PaecwfydbcdtfydbggcdtfydbghSmbaLahSmbabaHcdtfgQaXBdbaQcwfagBdbaQclfaYBdbaHcifhHkaecxfheaOcifgOad6mbkdndna9imbaHhdxekdnaHak0mbaHhdxekdnaRa879FmbaHhdxekJFFuuhRcbhdabhecbhOindna9ka0aeydbgQcdtfydbcdtfIdbg8Ua879ETmbaeclf8Pdbh9EabadcdtfgLaQBdbaLclfa9E83dba8UaRaRa8U9EEhRadcifhdkaecxfheaOcifgOaH6mbkkadak0mbxdkkascNefabadalaAz:cjjjbkdndnadak0mbadhhxekdna9imbadhhxekdnaRa889FmbadhhxekcehLinaRJbb;aZNg8Ua88a8Ua889DEh8XJbbbbh8Udna6Tmba9khea6hHinaeIdbg8Wa8Ua8Wa8X9FEa8Ua8Wa8U9EEh8UaeclfheaHcufgHmbkkJFFuuhRcbhhabhecbhHindna9ka0aeydbgOcdtfydbcdtfIdbg8Wa8X9ETmbaeclf8Pdbh9EabahcdtfgQaOBdbaQclfa9E83dba8WaRaRa8W9EEhRahcifhhkaecxfheaHcifgHad6mbkdnaLahad9hVceGmbadhhxdka8Ua86a86a8U9DEh86ahak9nmecbhLahhdaRa889FmbkkdnamcjjjjdGTmba9qcbalz:tjjjbh8LdnahTmbabheahhHina8LaeydbgOfce86bba8LaAaOcdtfydbfce86bbaeclfheaHcufgHmbkkascNefabahalaAz:cjjjbdndndnalTmbcbhQasyd:yehEindna8LaQfRbbTmbdna5aQfRbbgecl0mbceaetcQGmekdnaAaQcdtgXfydbgeaQSmbaaaQcx2fgHaaaecx2fge8Pdb83dbaHcwfaecwfydbBdbxeka8SaQc8S2fgLIdyg9ca9cJL:3;rUNg8UMh88aLIdwg9ha8UMhRaLIdlgxa8UMh8VaLIdbg9Fa8UMhUaLIdag9Ga8UaaaQcx2fggIdwg89N:th81aLId3g9Ha8UagIdlg8:N:th85aLIdKg9IagIdbgZa8UN:th8YJbbbbhcaLIdCg9JJbbbbMh87aLIdzg9KJbbbbMhBaLIdxgWJbbbbMh83dndnaCTmbaQhOinJbbbba88a8KaOc8S2fgHIdyg8U:va8UJbbbb9BEh8UaDaOaC2cltfheaHIdaa88Na81Mh81aHId3a88Na85Mh85aHIdKa88Na8YMh8YaHIdCa88Na87Mh87aHIdza88NaBMhBaHIdxa88Na83Mh83aHIdwa88NaRMhRaHIdla88Na8VMh8VaHIdba88NaUMhUaChHina81aecxfIdbg8ZaecwfIdbg8WNa8UN:th81a85a8ZaeclfIdbg8XNa8UN:th85a87a8Wa8XNa8UN:th87aUaeIdbg80a80Na8UN:thUa8Ya8Za80Na8UN:th8YaBa8Wa80Na8UN:thBa83a8Xa80Na8UN:th83aRa8Wa8WNa8UN:thRa8Va8Xa8XNa8UN:th8VaeczfheaHcufgHmbkaKaOcdtfydbgOaQ9hmbkaITmbaIaQcltfgeIdxhSaeIdwhJaeIdlh9eaeIdbh8UxekJbbbbhSJbbbbhJJbbbbh9eJbbbbh8UkaBaU:vg8Xa8YNa81:ta87aBa83aU:vg8WN:tg81a8Va83a8WN:tg8Z:vg80a8Wa8YNa85:tg8VN:th85aJa8Ua8XN:ta9ea8Ua8WN:tg83a80N:tg87aRaBa8XN:ta81a80N:tgB:vgR:mh81a83a8Z:vgJ:mh9ednJbbbba8Ua8UaU:vgTN:ta83aJN:ta87aRN:tg83:la88J:983:g81Ng8U9ETmba81a85Na9ea8VNaTa8YNaS:tMMa83:vhckaU:la8U9ETmba8Z:la8U9ETmbaB:la8U9ETmbaT:macNa8X:ma81acNa85aB:vMgBNa8W:ma9eacNa80:maBNa8Va8Z:vMMg87Na8Y:maU:vMMMh88a9maXfgeclfydbgHaeydbge9RhYaEaecitfhXJbbbbh8UdnaHaeSg8JmbJbbbbh8UaXheaYhOinaaaeclfydbcx2fgHIdwa89:tg8Wa8WNaHIdbaZ:tg8Wa8WNaHIdla8::tg8Wa8WNMMg8Waaaeydbcx2fgHIdwa89:tg8Xa8XNaHIdbaZ:tg8Xa8XNaHIdla8::tg8Xa8XNMMg8Xa8Ua8Ua8X9DEg8Ua8Ua8W9DEh8UaecwfheaOcufgOmbkkaBa89:tg8Wa8WNa88aZ:tg8Wa8WNa87a8::tg8Wa8WNMMa8U:rg8Ua8UN9EmbaLId8Khcdna8JmbcbhOcehLdninaaaXclfydbcx2fgeIdbaaaXydbcx2fgHIdbg8X:tg8Ua8:aHIdlg80:tg8YNaZa8X:tg83aeIdla80:tg8WN:tg8Za8Ua87a80:tgRNa88a8X:tg8Va8WN:tg80Na8Wa89aHIdwgU:tg81Na8YaeIdwaU:tg8XN:tg8Ya8WaBaU:tg85NaRa8XN:tg8WNa8Xa83Na81a8UN:tgUa8Xa8VNa85a8UN:tg8UNMMa8Za8ZNa8Ya8YNaUaUNMMa80a80Na8Wa8WNa8Ua8UNMMN:rJbbj8:N9FmeaXcwfhXaOcefgOaY6hLaYaO9hmbkkaLceGmekJbbbbJbbjZa9c:va9cJbbbb9BEg8Ua9haBNa9Ka88Na9GMg8Wa8WMMaBNaxa87Na9JaBNa9HMg8Wa8WMMa87Na9Fa88NaWa87Na9IMg8Wa8WMMa88NacMMM:lNa8Ua9ha89Na9KaZNa9GMg8Wa8WMMa89Naxa8:Na9Ja89Na9HMg8Wa8WMMa8:Na9FaZNaWa8:Na9IMg8Wa8WMMaZNacMMM:lNJbb;aZNJ:983:g81M9EmbagaBUdwaga87Udlaga88UdbkaQcefgQal9hmbkaCTmecbhLindna8LaLfRbbTmbaAaLcdtgefydbaL9hmba5aLfhEaaaLcx2fhOaKaefh8JayaLaC2cdtfh8AcbhgincuhQdnaERbbci9hmbaLhQa8JydbgeaLSmbayagcdtgHfhXa8AaHfIdbh8UaLhQinaQhHcuhQdnaXaeaC2cdtfIdba8U9CmbaHcuSmbaHhQa8Kaec8S2fIdya8KaHc8S2fIdy9ETmbaehQkaKaecdtfydbgeaL9hmbkkayagcdtfhXaDagcltfhYaLheinaXaeaC2cdtfJbbbbJbbjZa8KaeaQaQcuSEgHc8S2fIdyg8U:va8UJbbbb9BEaYaHaC2cltfgHIdwaOIdwNaHIdbaOIdbNaHIdlaOIdlNMMaHIdxMNUdbaKaecdtfydbgeaL9hmbkagcefggaC9hmbkkaLcefgLalSmixbkkaCmekcbhCkaiavaoarawaCalaaayazasa8Rasc1efa5a8Laqz:hjjjbkdnamcjjjjlGTmbazmbahTmbcbhQabheina5aeydbgAfRbbc3thLaecwfgKydbhHdndna8EaAcdtgYfydbaeclfgXydbgOSmbcbhCa8FaOcdtfydbaA9hmekcjjjj94hCkaeaLaCVaAVBdba5aOfRbbc3thLdndna8EaOcdtfydbaHSmbcbhCa8FaHcdtfydbaO9hmekcjjjj94hCkaXaLaCVaOVBdba5aHfRbbc3thCdndna8EaHcdtfydbaASmbcbhOa8FaYfydbaH9hmekcjjjj94hOkaKaCaOVaHVBdbaecxfheaQcifgQah6mbkkdnazTmbahTmbahheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPana86:rNUdbkasyd;8egecdtasc:Ceffc98fhHdninaeTmeaHydbcbyd:m:jjjbH:bjjjbbaHc98fhHaecufhexbkkascj;sbf8Kjjjjbahk;Yieouabydlhvabydbclfcbaicdtz:tjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd1:jjjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:tjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd:m:jjjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkawclfhwabclfhbaiaDcefgD9hmbkkk:hrdvuv998Jjjjjbca9Rgoczfcwfcbyd11jjbBdbaocb8Pdj1jjb83izaocwfcbydN1jjbBdbaocb8Pd:m1jjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:ZlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvc:G1jjbfydbcdtfydbcdtfydbhodnabalawavfydbcdtfydbgqcdtfgkydbgvaqSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnabaocdtfgkydbgvaoSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnabavfgDydbgvaxSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhvabhocbhkindndnavalydbgq9hmbdnavaoydbgq9hmbaoakBdbakcefhkxdkaoabaqcdtfydbBdbxekaoabaqcdtfydbBdbkaoclfhoalclfhlaeavcefgv9hmbkakk;Jiilud99duabcbaecltz:tjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakclfgxaqaxIdbMUdbakcwfgxaDaxIdbMUdbakcxfgkakIdbJbbjZMUdbaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhraehkinarcxfgoIdbhDaocbBdbararIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbarclfgoaDaoIdbNUdbarcwfgoaDaoIdbNUdbarczfhrakcufgkmbkkdnalTmbinavadydbcltfgrcxfgkaicwfIdbarcwfIdb:tgDaDNaiIdbarIdb:tgDaDNaiclfIdbarclfIdb:tgDaDNMMgDakIdbgqaqaD9DEUdbadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhrinabarIdbUdbarczfhrabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbclSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbclSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbclSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbclSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:d8Koque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:tjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd1:jjjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufavaz9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkJbbbbh8Adnas:ZgCaL:taY:Ygwaz:Y:tgENak:Zg3aO:Zg5:tNa3aL:tawaP:Y:tg8ENa5aC:tNMg8FJbbbb9BmbaCa3:ta8EaEa5aL:tNNNa8F:vh8AkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdna8AawMJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhicdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkcbhOaqcuavcdtgYavcFFFFi0Ecbyd1:jjjbHjjjjbbgKBdCaqciBd2aqamcbyd1:jjjbHjjjjbbgzBdKaqclBd2dndndndnalTmbaPcuf:YhwaoTmecbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxikkaKcFeaYz:tjjjb8AcbhPcbhvxdkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaKcFeaYz:tjjjbhravcufhocbhPcbhYindndndnaraiaYcdtgKfydbgAcm4aA7c:v;t;h;Ev2gvcs4av7aoGgHcdtfgXydbgOcuSmbcehvinaiaOcdtgOfydbaASmdaHavfhOavcefhvaraOaoGgHcdtfgXydbgOcu9hmbkkaXaYBdbaPhvaPcefhPxekazaOfydbhvkazaKfavBdbaYcefgYal9hmbkcuaPc8S2gOaPc;D;O;f8U0Ehvkcbhraqavcbyd1:jjjbHjjjjbbgvBd3aqcvBd2avcbaOz:tjjjbhOdnadTmbaehiinJbbnnJbbjZazaiydbgAcdtfydbgvazaiclfydbgHcdtfydbgYSavazaicwfydbgXcdtfydbgKSGgoEh8EdnaxaHcx2fgHIdbaxaAcx2fgAIdbg5:tgCaxaXcx2fgXIdlaAIdlg8A:tgwNaXIdba5:tg3aHIdla8A:tg8FN:tgLaLNa8FaXIdwaAIdwgE:tgaNawaHIdwaE:tg8FN:tgwawNa8Fa3NaaaCN:tgCaCNMM:rg3Jbbbb9ETmbaLa3:vhLaCa3:vhCawa3:vhwkaOavc8S2fgvavIdbawa8Ea3:rNg3awNNg8FMUdbavaCa3aCNgaNghavIdlMUdlavaLa3aLNg8ENggavIdwMUdwavaaawNgaavIdxMUdxava8EawNg8JavIdzMUdzava8EaCNg8EavIdCMUdCavawa3aLaENawa5Na8AaCNMM:mg8ANg5NgwavIdKMUdKavaCa5NgCavId3MUd3avaLa5NgLavIdaMUdaava5a8ANg5avId8KMUd8Kava3avIdyMUdydnaombaOaYc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava5avId8KMUd8Kava3avIdyMUdyaOaKc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava5avId8KMUd8Kava3avIdyMUdykaicxfhiarcifgrad6mbkkcbhAaqcuaPcdtgvaPcFFFFi0Egicbyd1:jjjbHjjjjbbgHBdaaqcoBd2aqaicbyd1:jjjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:tjjjbhYdnalTmbazhHinJbbbbJbbjZaOaHydbgXc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaYaXcdtgvfgXydbcuSmbaiavfIdbaw9ETmekaXaABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkJbbbbhwdnaPTmbinaiIdbgCawawaC9DEhwaiclfhiaPcufgPmbkkakcd4akfhOcehiinaigvcethiavaO6mbkcbhiaqcuavcdtgOavcFFFFi0Ecbyd1:jjjbHjjjjbbgHBdyaHcFeaOz:tjjjbhXdnadTmbavcufhrcbhPcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaYavcdtfydbhAdndnaYaOcdtfydbgvaYaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabaPcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavaPBdbaPcefhPkaxcifgxad6mbkaPci2hikdnaDmbcwhvxdkaw:rhwcwhvkaDawUdbkavcdthvdninavTmeavc98fgvaqcxffydbcbyd:m:jjjbH:bjjjbbxbkkaqc;Wbf8Kjjjjbaik:2ldwue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:tjjjb8AdnabaeSmbabaeadcdtzMjjjb8AkarcualcdtalcFFFFi0EgDcbyd1:jjjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbhkarcxfaryd2gxcdtgmfakBdbaraxcefgPBd2akaialavcbcbz:ejjjb8AarcxfaPcdtfaDcbyd1:jjjbHjjjjbbgvBdbaraxcdfgiBd2arcxfaicdtfcuavalaeadaqz:fjjjbgecltaecjjjjiGEcbyd1:jjjbHjjjjbbgiBdbaiaeavakalz:gjjjbdnadTmbaoaoNhocbhwabhlcbhkindnaiavalydbgecdtfydbcdtfIdbao9ETmbalclf8PdbhsabawcdtfgqaeBdbaqclfas83dbawcifhwkalcxfhlakcifgkad6mbkkaxcifhlamarcxffcwfhkdninalTmeakydbcbyd:m:jjjbH:bjjjbbakc98fhkalcufhlxbkkarc;Wbf8Kjjjjbawk:XCoDud99vue99vuo998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:tjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd1:jjjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd1:jjjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhDcbhCadhXcbhQinaeaDcufaeaD9iEaPcefaeaP9kEhLdndnadTmbaLcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMgK:lJbbb9p9DTmbaK:OhYxekcjjjj94hYkaYcCthYdndnaiclfIdbaONJbbbZMgK:lJbbb9p9DTmbaK:Oh8Axekcjjjj94h8Aka8AcqtaYVhYdndnaicwfIdbaONJbbbZMgK:lJbbb9p9DTmbaK:Oh8Axekcjjjj94h8AkaeaYa8AVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:tjjjbhEcbh3cbh5indnaEaxa5cdtfydbgYcm4aY7c:v;t;h;Ev2gics4ai7aAGgmcdtfg8AydbgecuSmbaeaYSmbcehiinaEamaifaAGgmcdtfg8AydbgecuSmeaicefhiaeaY9hmbkka8AaYBdba3aecuSfh3a5cefg5ad9hmbxdkkazcFeasz:tjjjb8Acbh3kJbbbbh8EdnaX:ZgKaH:taL:YgOaD:Y:tg8FNaC:Zgaa3:Zgh:tNaaaH:taOaP:Y:tggNahaK:tNMg8JJbbbb9BmbaKaa:taga8FahaH:tNNNa8J:vh8EkaPaLa3ar0giEhPaCa3aiEhCdna3arSmbaLaDaiEgDaP9Rcd9imbdndnaQcl0mbdna8EaOMJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPaDfcd9Theka3aXaiEhXaQcefgQcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd1:jjjbHjjjjbbg5BdKawclBd2aPcuf:YhKdndnadTmbaqhiaxheadhmindndnaiIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:OhYxekcjjjj94hYkaYcCthYdndnaiclfIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:Oh8Axekcjjjj94h8Aka8AcqtaYVhYdndnaicwfIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:Oh8Axekcjjjj94h8AkaeaYa8AVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:tjjjbhEcbhDcbh3indndndnaEaxa3cdtgLfydbgYcm4aY7c:v;t;h;Ev2gics4ai7aAGgmcdtfg8AydbgecuSmbcehiinaxaecdtgefydbaYSmdamaifheaicefhiaEaeaAGgmcdtfg8Aydbgecu9hmbkka8Aa3BdbaDhiaDcefhDxeka5aefydbhika5aLfaiBdba3cefg3ad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:tjjjb8AcbhDcbhekawaecbyd1:jjjbHjjjjbbgeBd3awcvBd2aecbaiz:tjjjbh8Aavcd4hxdnadTmbdnalTmbaxcdthEa5hYaqhealhmadhAina8AaYydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiamIdbaiIdxMUdxaiamclfIdbaiIdzMUdzaiamcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaYclfhYaecxfheamaEfhmaAcufgAmbxdkka5hmaqheadhYina8Aamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaYcufgYmbkkdnaDTmba8AhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhYawcuaDcdtgLaDcFFFFi0Egicbyd1:jjjbHjjjjbbgeBdaawcoBd2awaicbyd1:jjjbHjjjjbbgEBd8KaecFeaLz:tjjjbh3dnadTmbJbbjZJbbjZaK:vaPceSEaoNgOaONhKaxcdthxalheinaKaec;81jjbalEgmIdwa8Aa5ydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna3aAcdtgifgmydbcuSmbaEaifIdbaO9ETmekamaYBdbaEaifaOUdbka5clfh5aqcxfhqaeaxfheadaYcefgY9hmbkkaba3aLzMjjjb8AcrhikaicdthiinaiTmeaic98fgiawcxffydbcbyd:m:jjjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Ydidui99ducbhi8Jjjjjbca9Rglczfcwfcbyd11jjbBdbalcb8Pdj1jjb83izalcwfcbydN1jjbBdbalcb8Pd:m1jjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk9DeeuabcFeaicdtz:tjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;7idqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:tjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd1:jjjbHjjjjbbgvBdxavcFeaoz:tjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkcbhrdninarc98Smealcxfarfydbcbyd:m:jjjbH:bjjjbbarc98fhrxbkkalc;Wbf8Kjjjjbk9teiucbcbyd:q:jjjbgeabcifc98GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcrfc94GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:q:jjjbge9Rcifc98GaefgbBd:q:jjjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk:Iedbcjwk1eFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbeeeeeebebbeeebeebbbbebebbbbbbbbbbbbbbbbbbc1Dkxebbbdbbb:GNbb";
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
  function genremap(fun, positions, vertices, stride) {
    var sbrk = instance.exports.sbrk;
    var rp = sbrk(vertices * 4);
    var sp = sbrk(vertices * stride * 4);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(positions), sp);
    fun(rp, sp, vertices, stride * 4);
    heap = new Uint8Array(instance.exports.memory.buffer);
    var remap = new Uint32Array(vertices);
    new Uint8Array(remap.buffer).set(heap.subarray(rp, rp + vertices * 4));
    sbrk(rp - sbrk(0));
    return remap;
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
    generatePositionRemap: function(vertex_positions, vertex_positions_stride) {
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      return genremap(
        instance.exports.meshopt_generatePositionRemap,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride
      );
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

// node_modules/meshoptimizer/meshopt_clusterizer.js
var MeshoptClusterizer = (function() {
  var wasm = "b9H79Tebbbe96x9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gouuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9GluuuubiCAdilvorwDqooqkbiibeilve9Weiiviebeoweuecj:Pdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bw39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bqE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bkL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2Wtbxl79IV9RbmDwebcekdzHq:Y:beAdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek;z8JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:pjjjb8Adndnalcb9imbaoal9nmbamcuaocdtaocFFFFi0Egscbyd;01jjbHjjjjbbgzBd:CwamceBd;8wamascbyd;01jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;01jjbHjjjjbbgOBd:KwamciBd;8waihsalhAinazasydbcdtfcbBdbasclfhsaAcufgAmbkaihsalhAinazasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkaihsalhCcbhXindnazasydbcdtgQfgAydbcb9imbaHaQfaXBdbaAaAydbgQcjjjj94VBdbaQaXfhXkasclfhsaCcufgCmbkalci9UhLdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhXaHaAydbcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaXcdtfgXaXydbgXcefBdbaOaXcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaihsalhAindnazasydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaHaCfgCaCydbaQ9RBdbkasclfhsaAcufgAmbxdkkamcuaocdtgsaocFFFFi0EgAcbyd;01jjbHjjjjbbgzBd:CwamceBd;8wamaAcbyd;01jjbHjjjjbbgHBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;01jjbHjjjjbbgOBd:KwamciBd;8wazcbasz:pjjjbhXalci9UhLaihsalhAinaXasydbcdtfgCaCydbcefBdbasclfhsaAcufgAmbkdnaoTmbcbhsaHhAaXhCaohQinaAasBdbaAclfhAaCydbasfhsaCclfhCaQcufgQmbkkdnalci6mbcbhsaihAinaAcwfydbhCaAclfydbhQaHaAydbcdtfgKaKydbgKcefBdbaOaKcdtfasBdbaHaQcdtfgQaQydbgQcefBdbaOaQcdtfasBdbaHaCcdtfgCaCydbgCcefBdbaOaCcdtfasBdbaAcxfhAaLascefgs9hmbkkaoTmbcbhsaohAinaHasfgCaCydbaXasfydb9RBdbasclfhsaAcufgAmbkkamaLcbyd;01jjbHjjjjbbgsBd:OwamclBd;8wascbaLz:pjjjbhYamcuaLcK2alcjjjjd0Ecbyd;01jjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihAa8AhsaLhrJbbbbh5inavaAclfydbaK2cdtfgCIdlh8EavaAydbaK2cdtfgXIdlhEavaAcwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgasaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbasclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyascxfa8EaE:tg8Eagah:tggNa8FaE:tg8Faaah:tgaN:tgEJbbbbJbbjZa8Ja8K:tg8Ja8FNa8La8K:tg8Ka8EN:tghahNaEaENaaa8KNaga8JN:tgEaENMM:rg8K:va8KJbbbb9BEg8ENUdbasczfaEa8ENUdbascCfaha8ENUdbascwfa8Maya8NMMJbbnn:vUdba5a8KMh5aAcxfhAascKfhsarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;01jjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhsaChAinaAasBdbaAclfhAaLascefgs9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;01jjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLcbz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhsaLhAJFFuuh8NJFFuuh8MinascwfIdbgEa8Ma8MaE9EEh8MasclfIdbgEa8Na8NaE9EEh8NasIdbgEayayaE9EEhyascKfhsaAcufgAmbkkah:rhEamaocetgscuaocu9kEcbyd;01jjbHjjjjbbgCBd:4wdndnaoal9nmbaihsalhAinaCasydbcetfcFFi87ebasclfhsaAcufgAmbxdkkaCcFeasz:pjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhAJFFuuhEa8AhscuhIinascwfIdba8M:tghahNasIdbay:tghahNasclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEaAaIaXEhIascKfhsaLaAcefgA9hmbkkamczfcbcjwz:pjjjb8Aamcwf9cb83ibam9cb83iba8JaxNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh8EaRaENh5aIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaza81a3cdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAindndnaCaiaAydbgKcx2fgsclfydbgrcetf8Vebcs4aCasydbgXcetf8Vebcs4faCascwfydbglcetf8Vebcs4fgombcbhsxekcehsazaXcdtfydbgXceSmbcehsazarcdtfydbgrceSmbcehsazalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhsxekaocdfhskdnasaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba5:tghahNaXIdla8E:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEasaQ6ahaE9DVgXEhEaKaLaXEhLasaQaXEhQkaAclfhAavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama8EUd:KDama5Ud:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgzam8Pib83dbazcwfamcwf8Pib83dbaPcefhPkc3hzinazc98Smvamc:Cwfazfydbcbyd;41jjbH:bjjjbbazc98fhzxbkkcbh3a8Saq9pmbamydwaCaiaLcx2fgsydbcetf8Vebcs4aCascwfydbcetf8Vebcs4faCasclfydbcetf8Vebcs4ffaw9nmekcbhscbhAdna8ZTmbcbhAamczfhXinamczfaAcdtfaXydbgQBdbaXclfhXaAaYaQfRbbTfhAa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDaAc;8eaAclfc:bd6Eh8ZinamcjDfasfcFFF;7rBdbasclfgscz9hmbka8Zcdth80dnalTmbaeaXcdtfhocbhrindnazaoarcdtfydbcdtgsfydbgvTmbaOaHasfydbcdtfhAcuhQcuhsinazaiaAydbgKcx2fgXclfydbcdtfydbazaXydbcdtfydbfazaXcwfydbcdtfydbfgXasaXas6gXEhsaKaQaXEhQaAclfhAavcufgvmbkaQcuSmba8AaQcK2fgAIdwa8M:tgEaENaAIdbay:tgEaENaAIdla8N:tgEaENMM:rhEcbhAindndnasamc:qDfaAfgvydbgX6mbasaX9hmeaEamcjDfaAfIdb9FTmekavasBdbamc:GDfaAfaQBdbamcjDfaAfaEUdbxdkaAclfgAcz9hmbkkarcefgral9hmbkkamczfa80fhQcbhscbhAindnamc:GDfasfydbgXcuSmbaQaAcdtfaXBdbaAcefhAkasclfgscz9hmbkaAa8Zfg8ZTmbJFFuuhhcuhKamczfhsa8ZhvcuhQina8AasydbgXcK2fgAIdwa8M:tgEaENaAIdbay:tgEaENaAIdla8N:tgEaENMM:rhEdndnazaiaXcx2fgAclfydbcdtfydbazaAydbcdtfydbfazaAcwfydbcdtfydbfgAaQ6mbaAaQ9hmeaEah9DTmekaEhhaAhQaXhKkasclfhsavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaOaHaraXcdtfydbcdtgAfydbcdtfgKhsazaAfgvydbgQhAdnaQTmbdninasydbaLSmeasclfhsaAcufgATmdxbkkasaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgsIdbhEasIdlhhasIdwh8KasIdxh8EasIdzh5asIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa5Mh8Xa8Wa8EMh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPk:joivuv99lu8Jjjjjbca9Rgo8Kjjjjbdndnalcw0mbaiydbhraeabcitfgwalcdtciVBdlawarBdbdnalcd6mbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkkalabfhwxekcbhqaoczfcwfcbBdbao9cb83izaocwfcbBdbao9cb83ibJbbjZhkJbbjZhxinadaiaqcdtfydbcK2fhDcbhwinaoczfawfgraDawfIdbgmarIdbgP:tgsaxNaPMgPUdbaoawfgrasamaP:tNarIdbMUdbawclfgwcx9hmbkJbbjZakJbbjZMgk:vhxaqcefgqal9hmbkcbhradcbcecdaoIdlgmaoIdwgP9GEgwaoIdbgsaP9GEawasam9GEgzcdtgwfhHaoczfawfIdbhmaihwalhDinaiarcdtfgqydbhOaqawydbgABdbawaOBdbawclfhwaraHaAcK2fIdbam9DfhraDcufgDmbkdndnarcv6mbavc8X9kmbaralc98f6mekaiydbhraeabcitfgwalcdtciVBdlawarBdbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkalabfhwxekaeabcitfgwamUdbawawydlc98GazVBdlabcefaeadaiaravcefgqz:djjjbhDawawydlciGaDabcu7fcdtVBdlaDaeadaiarcdtfalar9Raqz:djjjbhwkaocaf8Kjjjjbawk;yddvue99dninabaecitfgrydlgwcl6mednawciGgDci9hmbabaecitfhbcbhecehqindnaiabydbgDfRbbmbcbhqadaDcK2fgkIdwalIdw:tgxaxNakIdbalIdb:tgxaxNakIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhwkabcwfhbaecefgeawcd46mbkaqceGTmdarawciGBdlskdnabcbawcd4gwalaDcdtfIdbarIdb:tgxJbbbb9FEgkaw7aecefgwfgecitfydlabakawfgwcitfydlVci0mbaraDBdlkabawadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0abydxaq9pVakVgDce9hmbavawcltfgxab8Pdb83dbaxcwfabcwfgx8Pdb83dbabydbhqdnaxydbgkTmbaoaqcdtfhxakhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaqakfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8Vebhscbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:zPrHue99eue99eue99eu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:pjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;01jjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;01jjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydbaC2cdtfhKavarcwfydbaC2cdtfhYavarclfydbaC2cdtfh8AcbhraLhEinaQarfgmaKarfg3Idbg5a8Aarfg8EIdbg8Fa5a8F9DEg5UdbamaYarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbarczf9cb83dbarcwf9cb83dbaxcuascx2gralc:bjjjl0Ecbyd;01jjbHjjjjbbgCBdN9GaxciBd;S9GascdthgazarfhvaChHazhLcbhPinaxcbcj;Gbz:pjjjbhEaPas2cdthadnaAmbaLhrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaCaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkaAmbavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3BdbarclfhramcufgmmbkaHhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydlg8EcefBdlava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydwg8EcefBdwaXa8Ecdtfa3BdbarclfhramcufgmmbkkaHagfhHaLagfhLaPcefgPci9hmbkaEaocetgrcuaocu9kEcbyd;01jjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:pjjjb8AkcbhmaEascbyd;01jjbHjjjjbbg8ABd:C9GaOaCaCascdtfaCascitfa8AascbazaKaiawaDaqakz:hjjjbcbh8Ednalci6gambcbh8Ea8Ahrash3ina8EarRbbfh8Earcefhra3cufg3mbkkaEcwf9cb83ibaE9cb83ibalawc9:fgrfcufar9UhrasaDfcufaD9Uh3dnaambara3ara30EhYcbhra8Ehacbhmincbh3dnarTmba8AarfRbbceSh3kamaEaiaCydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaCclfhCaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmbabamcltfgraE8Pib83dbarcwfaEcwf8Pib83dbamcefhmkczhrinarc98SmeaEc:m;Gbfarfydbcbyd;41jjbH:bjjjbbarc98fhrxbkkaxc;W;Gbf8Kjjjjbamk:YKDQue99lue99iul9:eur99lu8Jjjjjbc;qb9RgP8Kjjjjbaxhsaxhzdndnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:pjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9Ug8Aaka8Aak6EaHEgK9RhEaxaK9Rh3aKcufh5aKceth8EaKcdtgCc98fh8FavcitgOaC9Rarfc98fhaascufhhavcufhgaraOfh8JJbbjZas:Y:vh8KaravcdtgYfc94fh8LcbazceakaxSEg8Mcdtg8N9RhyJFFuuh8PcuhIcbh8Rcbh8SinaPclfa8ScdtfydbhQaPc8WfcKfcb8Pd:y1jjbgR83ibaPc8Wfczfcb8Pd:q1jjbg8U83ibaPc8Wfcwfcb8Pd11jjbg8V83ibaPcb8Pdj1jjbg8W83i8WaPczfcKfaR83ibaPczfczfa8U83ibaPczfcwfa8V83ibaPa8W83izaQaYfh8XcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8YaCIdbg8Za8Ya8Z9DEUdbaCczfgCaOcxfIdbg8YaCIdbg8Za8Ya8Z9EEUdbazclfgzcx9hmbkaPIdnaPId8W:tg80aPId9iaPIdU:tg81NhBaba8XaXcu7cdtfydbcK2fhAcbhzaPId80h83aPId9ehUinaPczfazfgCaAazfgOIdbg8YaCIdbg8Za8Ya8Z9DEUdbaCczfgCaOcxfIdbg8YaCIdbg8Za8Ya8Z9EEUdbazclfgzcx9hmbkaraLfgzaUa83:tg8Ya81Na80a8YNaBMMUdbazaYfaPId8KaPIdC:tg8YaPIdyaPIdK:tg8ZNaPIdaaPIdz:tg80a8YNa80a8ZNMMUdbaXcefgXav9hmbkcbh85dnaHmbcbhAaQhza8JhCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8XawaOclfydbcetfg868Vebh85awaOydbcetfgO8Vebh87aLce87eba86ce87ebaOce87ebaCaAa85cs4a87cs4fa8Xcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbka8Jh85kdndndndndndndndndndna8Eav0mba8Eax0meavaK6mda5aE9pmDcehLaEhXa85Tmlxrka5ag9pmwa8Eax9nmdxlkdnavavaK9UgzaK29Raza320mba5aE9pmwa85Th88ceh86aEhLxvka5ag6mixrka5ag9pmokcbhLaghXa85mikJFFuuh8YcbhQa5hzindnazcefgCaK6mbaLavaC9RgOaK6GmbarazcdtfIdbg8ZaC:YNa8Lavaz9RcdtfIdbg80aO:YNMg81a8Y9Embdndna8KaOahf:YNgB:lJbbb9p9DTmbaB:OhAxekcjjjj94hAka80asaA2aO9R:YNh80dndna8Kazasf:YNgB:lJbbb9p9DTmbaB:OhOxekcjjjj94hOkamasaO2aC9R:Ya8ZNa80MNa81Mg8Za8Ya8Za8Y9DgOEh8YaCaQaOEhQkaza8MfgzaX6mbxlkka85Th88cbh86aghLkJFFuuh8YcbhQaEhCaahAa8FhOaKhzindnazazaK9UgXaK29RaXa320mbdna86TmbaCaCaK9UgXaK29RaXa320mekaraOfIdbg8Zaz:YNaAIdbg80aC:YNMg81a8Y9EmbazhXaCh8Xdna88mba85aOfydbgXh8Xkdndna8Ka8Xahf:YNgB:lJbbb9p9DTmbaB:Oh87xekcjjjj94h87ka80asa872a8X9R:YNh80dndna8KaXahf:YNgB:lJbbb9p9DTmbaB:Oh8Xxekcjjjj94h8Xkamasa8X2aX9R:Ya8ZNa80MNa81Mg8Za8Ya8Za8Y9DgXEh8YazaQaXEhQkaCa8M9RhCaAayfhAaOa8NfhOaza8MfgzcufaL6mbxdkkJFFuuh8YcbhQaEhCaahAa8FhOaKhzindnazaK6mbaLaCaK6GmbaraOfIdbg8Zaz:YNaAIdbg80aC:YNMg81a8Y9Embdndna8Ka85aOfydbg8Xahf:YNgB:lJbbb9p9DTmbaB:Oh86xekcjjjj94h86kamasa862a8X9R:YgBa8ZNa80aBNMNa81Mg8Za8Ya8Za8Y9Dg8XEh8YazaQa8XEhQkaCa8M9RhCaAayfhAaOa8NfhOaza8MfgzcufaX6mbkkaQTmba8Ya8P9DTmba8Yh8PaQh8Ra8ShIka8Scefg8Sci9hmbkdndnaoc8X9kmbaIcb9omeka8Acufh86cbhYindndndnavaY9RaxaYaxfav0Eg8XTmbcbhAaeaYcdtfgzhCa8XhXinawaDaCydbcx2fgOcwfydbcetfgQ8VebhbawaOclfydbcetfgL8VebhrawaOydbcetfgO8VebhKaQce87ebaLce87ebaOce87ebaAarcs4aKcs4fabcs4ffhAaCclfhCaXcufgXmbka8XhOinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaOcufgOmbkaAaq0mekalaYfgzce86bbazcefcba8Xcufz:pjjjb8AxekalaYfgzce86bbazcefcba86z:pjjjb8Aa8Ah8Xka8XaYfgYav9pmdxbkkaravcdtg8XfhLdna8RTmbaPclfaIcdtfydbhza8RhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnava8R9nmbaPclfaIcdtfydba8Rcdtfhzava8R9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYaISmbcbhzaraPclfaYcdtfydbgKa8Xz:ojjjbhCavhXa8RhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaiala8RaocefgCarawaDaqakaxamz:hjjjbabaea8Rcdtgzfadazfaiazfala8Rfava8R9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk;Nkovud99euv99eul998Jjjjjbc:W;ae9Rgo8KjjjjbdndnadTmbavcd4hrcbhwcbhDindnaiaeclfydbar2cdtfgvIdbaiaeydbar2cdtfgqIdbgk:tgxaiaecwfydbar2cdtfgmIdlaqIdlgP:tgsNamIdbak:tgzavIdlaP:tgPN:tgkakNaPamIdwaqIdwgH:tgONasavIdwaH:tgHN:tgPaPNaHazNaOaxN:tgxaxNMM:rgsJbbbb9Bmbaoc:W:qefawcx2fgAakas:vUdwaAaxas:vUdlaAaPas:vUdbaoc8Wfawc8K2fgAaq8Pdb83dbaAav8Pdb83dxaAam8Pdb83dKaAcwfaqcwfydbBdbaAcCfavcwfydbBdbaAcafamcwfydbBdbawcefhwkaecxfheaDcifgDad6mbkab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbawTmeaocbBd8Sao9cb83iKao9cb83izaoczfaoc8Wfawci2cxaoc8Sfcbcrz:jjjjbaoIdKhCaoIdChXaoIdzhQao9cb83iwao9cb83ibaoaoc:W:qefawcxaoc8Sfcbciz:jjjjbJbbjZhkaoIdwgPJbbbbJbbjZaPaPNaoIdbgPaPNaoIdlgsasNMM:rgx:vaxJbbbb9BEgzNhxasazNhsaPazNhzaoc:W:qefheawhvinaecwfIdbaxNaeIdbazNasaeclfIdbNMMgPakaPak9DEhkaecxfheavcufgvmbkabaCUdwabaXUdlabaQUdbabaoId3UdxdndnakJ;n;m;m899FmbJbbbbhPaoc:W:qefheaoc8WfhvinaCavcwfIdb:taecwfIdbgHNaQavIdb:taeIdbgONaXavclfIdb:taeclfIdbgLNMMaxaHNazaONasaLNMM:vgHaPaHaP9EEhPavc8KfhvaecxfheawcufgwmbkabaxUd8KabasUdaabazUd3abaCaxaPN:tUdKabaXasaPN:tUdCabaQazaPN:tUdzabJbbjZakakN:t:rgkUdydndnaxJbbj:;axJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;axJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohexekcjjjj94hekabae86b8UdndnasJbbj:;asJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;asJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkabav86bRdndnazJbbj:;azJbbj:;9GEgPJbbjZaPJbbjZ9FEJbb;:9cNJbbbZJbbb:;azJbbbb9GEMgP:lJbbb9p9DTmbaP:Ohqxekcjjjj94hqkabaq86b8SdndnaecKtcK91:YJbb;:9c:vax:t:lavcKtcK91:YJbb;:9c:vas:t:laqcKtcK91:YJbb;:9c:vaz:t:lakMMMJbb;:9cNJbbjZMgk:lJbbb9p9DTmbak:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbkaoc:W;aef8Kjjjjbk;Iwwvul99iud99eue99eul998Jjjjjbcje9Rgr8Kjjjjbavcd4hwaicd4hDdndnaoTmbarc;abfcbaocdtgvz:pjjjb8Aarc;Gbfcbavz:pjjjb8AarhvarcafhiaohqinavcFFF97BdbaicFFF;7rBdbaiclfhiavclfhvaqcufgqmbkdnadTmbcbhkinaeakaD2cdtfgvIdwhxavIdlhmavIdbhPalakaw2cdtfIdbhsarc;abfhzarhiarc;GbfhHarcafhqc:G1jjbhvaohOinasavcwfIdbaxNavIdbaPNavclfIdbamNMMgAMhCakhXdnaAas:tgAaqIdbgQ9DgLmbaHydbhXkaHaXBdbakhXdnaCaiIdbgK9EmbazydbhXaKhCkazaXBdbaiaCUdbaqaAaQaLEUdbavcxfhvaqclfhqaHclfhHaiclfhiazclfhzaOcufgOmbkakcefgkad9hmbkkadThkJbbbbhCcbhXarc;abfhvarc;Gbfhicbhqinalavydbgzaw2cdtfIdbalaiydbgHaw2cdtfIdbaeazaD2cdtfgzIdwaeaHaD2cdtfgHIdw:tgsasNazIdbaHIdb:tgsasNazIdlaHIdl:tgsasNMM:rMMgsaCasaC9EgzEhCaqaXazEhXaiclfhiavclfhvaoaqcefgq9hmbkaCJbbbZNhKxekadThkcbhXJbbbbhKkJbbbbhCdnaearc;abfaXcdtgifydbgqaD2cdtfgvIdwaearc;GbfaifydbgzaD2cdtfgiIdwgm:tgsasNavIdbaiIdbgY:tgAaANavIdlaiIdlgP:tgQaQNMM:rgxJbbbb9ETmbaxalaqaw2cdtfIdbMalazaw2cdtfIdb:taxaxM:vhCkasaCNamMhmaQaCNaPMhPaAaCNaYMhYdnakmbaDcdthvawcdthiindnalIdbg8AaecwfIdbam:tgCaCNaeIdbaY:tgsasNaeclfIdbaP:tgAaANMM:rgQMgEaK9ETmbJbbbbhxdnaQJbbbb9ETmbaEaK:taQaQM:vhxkaxaCNamMhmaxaANaPMhPaxasNaYMhYa8AaKaQMMJbbbZNhKkaeavfhealaifhladcufgdmbkkabaKUdxabamUdwabaPUdlabaYUdbarcjef8Kjjjjbkjeeiu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwdnaiTmbawceawce0EhDarhiinaiaeadRbbcdtfydbBdbadcefhdaiclfhiaDcufgDmbkkabarawaladaoz1jjjbarcj8Wf8Kjjjjbk:Reeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dbabcyf9cb83dbabcaf9cb83dbabcKf9cb83dbabczf9cb83dbabcwf9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrz:jjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk:3lequ8JjjjjbcjP9Rgl8Kjjjjbcbhvalcjxfcbaiz:pjjjb8AdndnadTmbcjehoaehrincuhwarhDcuhqavhkdninawakaoalcjxfaDcefRbbfRbb9RcFeGci6aoalcjxfaDRbbfRbb9RcFeGci6faoalcjxfaDcdfRbbfRbb9RcFeGci6fgxaq9mgmEhwdnammbaxce0mdkaxaqaxaq9kEhqaDcifhDadakcefgk9hmbkkaeawci2fgDcdfRbbhqaDcefRbbhxaDRbbhkaeavci2fgDcifaDawav9Rci2zMjjjb8Aakalcjxffaocefgo86bbaxalcjxffao86bbaDcdfaq86bbaDcefax86bbaDak86bbaqalcjxffao86bbarcifhravcefgvad9hmbkalcFeaicetz:pjjjbhoadci2gDceaDce0EhqcbhxindnaoaeRbbgkcetfgw8UebgDcu9kmbawax87ebaocjlfaxcdtfabakcdtfydbBdbaxhDaxcefhxkaeaD86bbaecefheaqcufgqmbkaxcdthDxekcbhDkabalcjlfaDz:ojjjb8AalcjPf8Kjjjjbk9teiucbcbyd;81jjbgeabcifc98GfgbBd;81jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;teeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk:3eedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdxaialBdwaialBdlaialBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;81jjbgeabcrfc94GfgbBd;81jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;81jjbge9Rcifc98GaefgbBd;81jjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk:;Deludndndnadch9pmbabaeSmdaeabadfgi9Rcbadcet9R0mekabaead;8qbbxekaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocd4cefciGgiTmbaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglcd4cefcrGgdTmbavadcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiaeydlBdlaiaeydwBdwaiaeydxBdxaiaeydzBdzaiaeydCBdCaiaeydKBdKaiaeyd3Bd3aecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaiaeRbe86beaiaeRbd86bdaiaeRbi86biaiaeRbl86blaiaeRbv86bvaiaeRbo86boaiaeRbr86braicwfhiaecwfhealc94fglmbkkabkk:nedbcjwktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0wkxebbbdbbbjNbb";
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
  function buildMeshlets(fun, indices, vertex_positions, vertex_count, vertex_positions_stride, max_vertices, min_triangles, max_triangles, parama, paramb) {
    var sbrk = instance.exports.sbrk;
    var max_meshlets = instance.exports.meshopt_buildMeshletsBound(indices.length, max_vertices, min_triangles);
    var meshletsp = sbrk(max_meshlets * MESHLET_SIZE);
    var meshlet_verticesp = sbrk(indices.length * 4);
    var meshlet_trianglesp = sbrk(indices.length);
    var indicesp = sbrk(indices.byteLength);
    var verticesp = sbrk(vertex_positions.byteLength);
    var heap = new Uint8Array(instance.exports.memory.buffer);
    heap.set(bytes(indices), indicesp);
    heap.set(bytes(vertex_positions), verticesp);
    var count = fun(
      meshletsp,
      meshlet_verticesp,
      meshlet_trianglesp,
      indicesp,
      indices.length,
      verticesp,
      vertex_count,
      vertex_positions_stride,
      max_vertices,
      min_triangles,
      max_triangles,
      parama,
      paramb
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
    var used_triangles = last_triangle_offset + last_triangle_count * 3;
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
      assert(max_vertices > 0 && max_vertices <= 256);
      assert(max_triangles >= 1 && max_triangles <= 512);
      cone_weight = cone_weight || 0;
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return buildMeshlets(
        instance.exports.meshopt_buildMeshletsFlex,
        indices32,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        max_vertices,
        max_triangles,
        max_triangles,
        cone_weight,
        0
      );
    },
    buildMeshletsFlex: function(indices, vertex_positions, vertex_positions_stride, max_vertices, min_triangles, max_triangles, cone_weight, split_factor) {
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(max_vertices > 0 && max_vertices <= 256);
      assert(min_triangles >= 1 && max_triangles <= 512);
      assert(min_triangles <= max_triangles);
      cone_weight = cone_weight || 0;
      split_factor = split_factor || 0;
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return buildMeshlets(
        instance.exports.meshopt_buildMeshletsFlex,
        indices32,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        max_vertices,
        min_triangles,
        max_triangles,
        cone_weight,
        split_factor
      );
    },
    buildMeshletsSpatial: function(indices, vertex_positions, vertex_positions_stride, max_vertices, min_triangles, max_triangles, fill_weight) {
      assert(indices.length % 3 == 0);
      assert(vertex_positions instanceof Float32Array);
      assert(vertex_positions.length % vertex_positions_stride == 0);
      assert(vertex_positions_stride >= 3);
      assert(max_vertices > 0 && max_vertices <= 256);
      assert(min_triangles >= 1 && max_triangles <= 512);
      assert(min_triangles <= max_triangles);
      fill_weight = fill_weight || 0;
      var indices32 = indices.BYTES_PER_ELEMENT == 4 ? indices : new Uint32Array(indices);
      return buildMeshlets(
        instance.exports.meshopt_buildMeshletsSpatial,
        indices32,
        vertex_positions,
        vertex_positions.length / vertex_positions_stride,
        vertex_positions_stride * 4,
        max_vertices,
        min_triangles,
        max_triangles,
        fill_weight
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

// packages/engine/Source/Scene/SceneMode.js
var SceneMode = {
  /**
   * Morphing between mode, e.g., 3D to 2D.
   *
   * @type {number}
   * @constant
   */
  MORPHING: 0,
  /**
   * Columbus View mode.  A 2.5D perspective view where the map is laid out
   * flat and objects with non-zero height are drawn above it.
   *
   * @type {number}
   * @constant
   */
  COLUMBUS_VIEW: 1,
  /**
   * 2D mode.  The map is viewed top-down with an orthographic projection.
   *
   * @type {number}
   * @constant
   */
  SCENE2D: 2,
  /**
   * 3D mode.  A traditional 3D perspective view of the globe.
   *
   * @type {number}
   * @constant
   */
  SCENE3D: 3
};
SceneMode.getMorphTime = function(value) {
  if (value === SceneMode.SCENE3D) {
    return 1;
  } else if (value === SceneMode.MORPHING) {
    return void 0;
  }
  return 0;
};
var SceneMode_default = Object.freeze(SceneMode);

// packages/engine/Source/Core/TaskProcessor.js
var import_urijs = __toESM(require_URI(), 1);

// packages/engine/Source/Core/destroyObject.js
function returnTrue() {
  return true;
}
function destroyObject(object, message) {
  message = message ?? "This object was destroyed, i.e., destroy() was called.";
  function throwOnDestroyed() {
    throw new DeveloperError_default(message);
  }
  for (const key in object) {
    if (typeof object[key] === "function") {
      object[key] = throwOnDestroyed;
    }
  }
  object.isDestroyed = returnTrue;
  return void 0;
}
var destroyObject_default = destroyObject;

// packages/engine/Source/Core/TaskProcessor.js
function canTransferArrayBuffer() {
  if (!defined_default(TaskProcessor._canTransferArrayBuffer)) {
    const worker = createWorker("transferTypedArrayTest");
    worker.postMessage = worker.webkitPostMessage ?? worker.postMessage;
    const value = 99;
    const array = new Int8Array([value]);
    try {
      worker.postMessage(
        {
          array
        },
        [array.buffer]
      );
    } catch (e) {
      TaskProcessor._canTransferArrayBuffer = false;
      return TaskProcessor._canTransferArrayBuffer;
    }
    TaskProcessor._canTransferArrayBuffer = new Promise((resolve) => {
      worker.onmessage = function(event) {
        const array2 = event.data.array;
        const result = defined_default(array2) && array2[0] === value;
        resolve(result);
        worker.terminate();
        TaskProcessor._canTransferArrayBuffer = result;
      };
    });
  }
  return TaskProcessor._canTransferArrayBuffer;
}
var taskCompletedEvent = new Event_default();
function urlFromScript(script) {
  let blob;
  try {
    blob = new Blob([script], {
      type: "application/javascript"
    });
  } catch (e) {
    const BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
    const blobBuilder = new BlobBuilder();
    blobBuilder.append(script);
    blob = blobBuilder.getBlob("application/javascript");
  }
  const URL2 = window.URL || window.webkitURL;
  return URL2.createObjectURL(blob);
}
function createWorker(url) {
  const uri = new import_urijs.default(url);
  const isUri = uri.scheme().length !== 0 && uri.fragment().length === 0;
  const moduleID = url.replace(/\.js$/, "");
  const options = {};
  let workerPath;
  let crossOriginUrl;
  if (isCrossOriginUrl_default(url)) {
    crossOriginUrl = url;
  } else if (!isUri) {
    const moduleAbsoluteUrl = buildModuleUrl_default(
      `${TaskProcessor._workerModulePrefix}/${moduleID}.js`
    );
    if (isCrossOriginUrl_default(moduleAbsoluteUrl)) {
      crossOriginUrl = moduleAbsoluteUrl;
    }
  }
  if (crossOriginUrl) {
    const script = `import "${crossOriginUrl}";`;
    workerPath = urlFromScript(script);
    options.type = "module";
    return new Worker(workerPath, options);
  }
  if (!isUri && typeof CESIUM_WORKERS !== "undefined") {
    const script = `
      importScripts("${urlFromScript(CESIUM_WORKERS)}");
      CesiumWorkers["${moduleID}"]();
    `;
    workerPath = urlFromScript(script);
    return new Worker(workerPath, options);
  }
  workerPath = url;
  if (!isUri) {
    workerPath = buildModuleUrl_default(
      `${TaskProcessor._workerModulePrefix + moduleID}.js`
    );
  }
  if (!FeatureDetection_default.supportsEsmWebWorkers()) {
    throw new RuntimeError_default(
      "This browser is not supported. Please update your browser to continue."
    );
  }
  options.type = "module";
  return new Worker(workerPath, options);
}
async function getWebAssemblyLoaderConfig(processor, wasmOptions) {
  const config = {
    modulePath: void 0,
    wasmBinaryFile: void 0,
    wasmBinary: void 0
  };
  if (!FeatureDetection_default.supportsWebAssembly()) {
    if (!defined_default(wasmOptions.fallbackModulePath)) {
      throw new RuntimeError_default(
        `This browser does not support Web Assembly, and no backup module was provided for ${processor._workerPath}`
      );
    }
    config.modulePath = buildModuleUrl_default(wasmOptions.fallbackModulePath);
    return config;
  }
  config.wasmBinaryFile = buildModuleUrl_default(wasmOptions.wasmBinaryFile);
  const arrayBuffer = await Resource_default.fetchArrayBuffer({
    url: config.wasmBinaryFile
  });
  config.wasmBinary = arrayBuffer;
  return config;
}
function TaskProcessor(workerPath, maximumActiveTasks) {
  this._workerPath = workerPath;
  this._maximumActiveTasks = maximumActiveTasks ?? Number.POSITIVE_INFINITY;
  this._activeTasks = 0;
  this._nextID = 0;
  this._webAssemblyPromise = void 0;
}
var createOnmessageHandler = (worker, id, resolve, reject) => {
  const listener = ({ data }) => {
    if (data.id !== id) {
      return;
    }
    if (defined_default(data.error)) {
      let error = data.error;
      if (error.name === "RuntimeError") {
        error = new RuntimeError_default(data.error.message);
        error.stack = data.error.stack;
      } else if (error.name === "DeveloperError") {
        error = new DeveloperError_default(data.error.message);
        error.stack = data.error.stack;
      } else if (error.name === "Error") {
        error = new Error(data.error.message);
        error.stack = data.error.stack;
      }
      taskCompletedEvent.raiseEvent(error);
      reject(error);
    } else {
      taskCompletedEvent.raiseEvent();
      resolve(data.result);
    }
    worker.removeEventListener("message", listener);
  };
  return listener;
};
var emptyTransferableObjectArray = [];
async function runTask(processor, parameters, transferableObjects) {
  const canTransfer = await Promise.resolve(canTransferArrayBuffer());
  if (!defined_default(transferableObjects)) {
    transferableObjects = emptyTransferableObjectArray;
  } else if (!canTransfer) {
    transferableObjects.length = 0;
  }
  const id = processor._nextID++;
  const promise = new Promise((resolve, reject) => {
    processor._worker.addEventListener(
      "message",
      createOnmessageHandler(processor._worker, id, resolve, reject)
    );
  });
  processor._worker.postMessage(
    {
      id,
      baseUrl: buildModuleUrl_default.getCesiumBaseUrl().url,
      parameters,
      canTransferArrayBuffer: canTransfer
    },
    transferableObjects
  );
  return promise;
}
async function scheduleTask(processor, parameters, transferableObjects) {
  ++processor._activeTasks;
  try {
    const result = await runTask(processor, parameters, transferableObjects);
    --processor._activeTasks;
    return result;
  } catch (error) {
    --processor._activeTasks;
    throw error;
  }
}
TaskProcessor.prototype.scheduleTask = function(parameters, transferableObjects) {
  if (!defined_default(this._worker)) {
    this._worker = createWorker(this._workerPath);
  }
  if (this._activeTasks >= this._maximumActiveTasks) {
    return void 0;
  }
  return scheduleTask(this, parameters, transferableObjects);
};
TaskProcessor.prototype.initWebAssemblyModule = async function(webAssemblyOptions) {
  if (defined_default(this._webAssemblyPromise)) {
    return this._webAssemblyPromise;
  }
  const init = async () => {
    const worker = this._worker = createWorker(this._workerPath);
    const wasmConfig = await getWebAssemblyLoaderConfig(
      this,
      webAssemblyOptions
    );
    const canTransfer = await Promise.resolve(canTransferArrayBuffer());
    let transferableObjects;
    const binary = wasmConfig.wasmBinary;
    if (defined_default(binary) && canTransfer) {
      transferableObjects = [binary];
    }
    const promise = new Promise((resolve, reject) => {
      worker.onmessage = function({ data }) {
        if (defined_default(data)) {
          resolve(data.result);
        } else {
          reject(new RuntimeError_default("Could not configure wasm module"));
        }
      };
    });
    worker.postMessage(
      {
        canTransferArrayBuffer: canTransfer,
        parameters: { webAssemblyConfig: wasmConfig }
      },
      transferableObjects
    );
    return promise;
  };
  this._webAssemblyPromise = init();
  return this._webAssemblyPromise;
};
TaskProcessor.prototype.isDestroyed = function() {
  return false;
};
TaskProcessor.prototype.destroy = function() {
  if (defined_default(this._worker)) {
    this._worker.terminate();
  }
  return destroyObject_default(this);
};
TaskProcessor.taskCompletedEvent = taskCompletedEvent;
TaskProcessor._defaultWorkerModulePrefix = "Workers/";
TaskProcessor._workerModulePrefix = TaskProcessor._defaultWorkerModulePrefix;
TaskProcessor._canTransferArrayBuffer = void 0;
var TaskProcessor_default = TaskProcessor;

// packages/engine/Source/Core/TerrainPicker.js
var MAXIMUM_TERRAIN_PICKER_LEVEL = 3;
function TerrainPicker(vertices, indices, encoding) {
  Check_default.defined("vertices", vertices);
  Check_default.defined("indices", indices);
  Check_default.defined("encoding", encoding);
  this._vertices = vertices;
  this._indices = indices;
  this._encoding = encoding;
  this._inverseTransform = new Matrix4_default();
  this._needsRebuild = true;
  this._rootNode = new TerrainPickerNode();
}
var incrementallyBuildTerrainPickerTaskProcessor = new TaskProcessor_default(
  "incrementallyBuildTerrainPicker"
);
Object.defineProperties(TerrainPicker.prototype, {
  /**
   * Indicates whether the terrain picker needs to be rebuilt due to changes in the underlying terrain mesh's vertices or indices.
   * @type {boolean}
   */
  needsRebuild: {
    get: function() {
      return this._needsRebuild;
    },
    set: function(value) {
      this._needsRebuild = value;
    }
  }
});
function TerrainPickerNode() {
  this.x = 0;
  this.y = 0;
  this.level = 0;
  this.aabb = createAABBForNode(this.x, this.y, this.level);
  this.intersectingTriangles = new Uint32Array(0);
  this.children = [];
  this.buildingChildren = false;
}
TerrainPickerNode.prototype.addChild = function(childIdx) {
  if (childIdx < 0 || childIdx > 3) {
    throw new DeveloperError_default(
      "TerrainPickerNode child index must be between 0 and 3, inclusive."
    );
  }
  const childNode = new TerrainPickerNode();
  childNode.x = this.x * 2 + (childIdx & 1);
  childNode.y = this.y * 2 + (childIdx >> 1 & 1);
  childNode.level = this.level + 1;
  childNode.aabb = createAABBForNode(childNode.x, childNode.y, childNode.level);
  this.children[childIdx] = childNode;
};
var scratchTransformedRay = new Ray_default();
var scratchTrianglePoints = [
  new Cartesian3_default(),
  new Cartesian3_default(),
  new Cartesian3_default()
];
TerrainPicker.prototype.rayIntersect = function(ray, tileTransform, cullBackFaces, mode, projection) {
  if (this._needsRebuild) {
    reset(this, tileTransform);
  }
  const invTransform = this._inverseTransform;
  const transformedRay = scratchTransformedRay;
  transformedRay.origin = Matrix4_default.multiplyByPoint(
    invTransform,
    ray.origin,
    transformedRay.origin
  );
  transformedRay.direction = Matrix4_default.multiplyByPointAsVector(
    invTransform,
    ray.direction,
    transformedRay.direction
  );
  const intersections = [];
  getNodesIntersectingRay(this._rootNode, transformedRay, intersections);
  return findClosestPointInClosestNode(
    this,
    intersections,
    ray,
    cullBackFaces,
    mode,
    projection
  );
};
function reset(terrainPicker, tileTransform) {
  Matrix4_default.inverse(tileTransform, terrainPicker._inverseTransform);
  terrainPicker._needsRebuild = false;
  const triangleCount = terrainPicker._indices.length / 3;
  const intersectingTriangles = new Uint32Array(triangleCount);
  for (let i = 0; i < triangleCount; ++i) {
    intersectingTriangles[i] = i;
  }
  terrainPicker._rootNode.intersectingTriangles = intersectingTriangles;
  terrainPicker._rootNode.children.length = 0;
}
var scratchAABBMin = new Cartesian3_default();
var scratchAABBMax = new Cartesian3_default();
function createAABBForNode(x, y, level) {
  const sizeAtLevel = 1 / Math.pow(2, level);
  const aabbMin = Cartesian3_default.fromElements(
    x * sizeAtLevel - 0.5,
    y * sizeAtLevel - 0.5,
    -0.5,
    scratchAABBMin
  );
  const aabbMax = Cartesian3_default.fromElements(
    (x + 1) * sizeAtLevel - 0.5,
    (y + 1) * sizeAtLevel - 0.5,
    0.5,
    scratchAABBMax
  );
  return AxisAlignedBoundingBox_default.fromCorners(aabbMin, aabbMax);
}
function packTriangleBuffers(trianglePositionsBuffer, triangleIndicesBuffer, trianglePositions, triangleIndex, bufferIndex) {
  Cartesian3_default.pack(
    trianglePositions[0],
    trianglePositionsBuffer,
    9 * bufferIndex
  );
  Cartesian3_default.pack(
    trianglePositions[1],
    trianglePositionsBuffer,
    9 * bufferIndex + 3
  );
  Cartesian3_default.pack(
    trianglePositions[2],
    trianglePositionsBuffer,
    9 * bufferIndex + 6
  );
  triangleIndicesBuffer[bufferIndex] = triangleIndex;
}
var scratchInterval = new Interval_default();
function getNodesIntersectingRay(currentNode, ray, intersectingNodes) {
  const interval = IntersectionTests_default.rayAxisAlignedBoundingBox(
    ray,
    currentNode.aabb,
    scratchInterval
  );
  if (!defined_default(interval)) {
    return;
  }
  const isLeaf = !currentNode.children.length || currentNode.buildingChildren;
  if (isLeaf) {
    intersectingNodes.push({
      node: currentNode,
      interval: new Interval_default(interval.start, interval.stop)
    });
    return;
  }
  for (let i = 0; i < currentNode.children.length; i++) {
    getNodesIntersectingRay(currentNode.children[i], ray, intersectingNodes);
  }
}
function findClosestPointInClosestNode(terrainPicker, intersections, ray, cullBackFaces, mode, projection) {
  const sortedIntersections = intersections.sort(function(a, b) {
    return a.interval.start - b.interval.start;
  });
  let minT = Number.MAX_VALUE;
  for (let i = 0; i < sortedIntersections.length; i++) {
    const intersection = sortedIntersections[i];
    const intersectionResult = getClosestTriangleInNode(
      terrainPicker,
      ray,
      intersection.node,
      cullBackFaces,
      mode,
      projection
    );
    minT = Math.min(intersectionResult, minT);
    if (minT !== Number.MAX_VALUE) {
      break;
    }
  }
  if (minT !== Number.MAX_VALUE) {
    return Ray_default.getPoint(ray, minT);
  }
  return void 0;
}
function getClosestTriangleInNode(terrainPicker, ray, node, cullBackFaces, mode, projection) {
  let result = Number.MAX_VALUE;
  const encoding = terrainPicker._encoding;
  const indices = terrainPicker._indices;
  const vertices = terrainPicker._vertices;
  const triangleCount = node.intersectingTriangles.length;
  const isMaxLevel = node.level >= MAXIMUM_TERRAIN_PICKER_LEVEL;
  const shouldBuildChildren = !isMaxLevel && !node.buildingChildren;
  let trianglePositions;
  let triangleIndices;
  if (shouldBuildChildren) {
    trianglePositions = new Float64Array(triangleCount * 9);
    triangleIndices = new Uint32Array(triangleCount);
  }
  for (let i = 0; i < triangleCount; i++) {
    const triIndex = node.intersectingTriangles[i];
    const v0 = getVertexPosition(
      encoding,
      mode,
      projection,
      ray,
      vertices,
      indices[3 * triIndex],
      scratchTrianglePoints[0]
    );
    const v1 = getVertexPosition(
      encoding,
      mode,
      projection,
      ray,
      vertices,
      indices[3 * triIndex + 1],
      scratchTrianglePoints[1]
    );
    const v2 = getVertexPosition(
      encoding,
      mode,
      projection,
      ray,
      vertices,
      indices[3 * triIndex + 2],
      scratchTrianglePoints[2]
    );
    const triT = IntersectionTests_default.rayTriangleParametric(
      ray,
      v0,
      v1,
      v2,
      cullBackFaces
    );
    if (defined_default(triT) && triT < result && triT >= 0) {
      result = triT;
    }
    if (shouldBuildChildren) {
      packTriangleBuffers(
        trianglePositions,
        triangleIndices,
        scratchTrianglePoints,
        triIndex,
        i
      );
    }
  }
  if (shouldBuildChildren) {
    for (let childIdx = 0; childIdx < 4; childIdx++) {
      node.addChild(childIdx);
    }
    addTrianglesToChildrenNodes(
      terrainPicker._inverseTransform,
      node,
      triangleIndices,
      trianglePositions
    );
  }
  return result;
}
var scratchCartographic = new Cartographic_default();
function getVertexPosition(encoding, mode, projection, ray, vertices, index, result) {
  let position = encoding.getExaggeratedPosition(vertices, index, result);
  if (mode === SceneMode_default.SCENE3D) {
    return position;
  }
  const ellipsoid = projection.ellipsoid;
  const positionCartographic = ellipsoid.cartesianToCartographic(
    position,
    scratchCartographic
  );
  position = projection.project(positionCartographic, result);
  position = Cartesian3_default.fromElements(
    position.z,
    position.x,
    position.y,
    result
  );
  const worldWidth = Math_default.TWO_PI * projection.ellipsoid.maximumRadius;
  const k = Math.round((ray.origin.y - position.y) / worldWidth);
  position.y += k * worldWidth;
  return position;
}
async function addTrianglesToChildrenNodes(inverseTransform, node, triangleIndices, trianglePositions) {
  node.buildingChildren = true;
  const inverseTransformPacked = new Float64Array(16);
  Matrix4_default.pack(inverseTransform, inverseTransformPacked, 0);
  const aabbArray = new Float64Array(6 * 4);
  for (let i = 0; i < 4; i++) {
    Cartesian3_default.pack(node.children[i].aabb.minimum, aabbArray, i * 6);
    Cartesian3_default.pack(node.children[i].aabb.maximum, aabbArray, i * 6 + 3);
  }
  const parameters = {
    aabbs: aabbArray,
    inverseTransform: inverseTransformPacked,
    triangleIndices,
    trianglePositions
  };
  const transferableObjects = [
    aabbArray.buffer,
    inverseTransformPacked.buffer,
    triangleIndices.buffer,
    trianglePositions.buffer
  ];
  const incrementallyBuildTerrainPickerPromise = incrementallyBuildTerrainPickerTaskProcessor.scheduleTask(
    parameters,
    transferableObjects
  );
  if (!defined_default(incrementallyBuildTerrainPickerPromise)) {
    node.buildingChildren = false;
    return;
  }
  const result = await incrementallyBuildTerrainPickerPromise;
  result.intersectingTrianglesArrays.forEach((buffer, index) => {
    if (defined_default(node.children[index])) {
      node.children[index].intersectingTriangles = new Uint32Array(buffer);
    }
  });
  node.intersectingTriangles = new Uint32Array(0);
  node.buildingChildren = false;
}
var TerrainPicker_default = TerrainPicker;

// packages/engine/Source/Core/TerrainMesh.js
function TerrainMesh(center, vertices, indices, indexCountWithoutSkirts, vertexCountWithoutSkirts, minimumHeight, maximumHeight, rectangle, boundingSphere3D, occludeePointInScaledSpace, vertexStride, orientedBoundingBox, encoding, westIndicesSouthToNorth, southIndicesEastToWest, eastIndicesNorthToSouth, northIndicesWestToEast) {
  this.center = center;
  this.vertices = vertices;
  this.stride = vertexStride ?? 6;
  this.indices = indices;
  this.indexCountWithoutSkirts = indexCountWithoutSkirts;
  this.vertexCountWithoutSkirts = vertexCountWithoutSkirts;
  this.minimumHeight = minimumHeight;
  this.maximumHeight = maximumHeight;
  this.rectangle = rectangle;
  this.boundingSphere3D = boundingSphere3D;
  this.occludeePointInScaledSpace = occludeePointInScaledSpace;
  this.orientedBoundingBox = orientedBoundingBox;
  this.encoding = encoding;
  this.westIndicesSouthToNorth = westIndicesSouthToNorth;
  this.southIndicesEastToWest = southIndicesEastToWest;
  this.eastIndicesNorthToSouth = eastIndicesNorthToSouth;
  this.northIndicesWestToEast = northIndicesWestToEast;
  this._transform = new Matrix4_default();
  this._lastPickSceneMode = void 0;
  this._terrainPicker = new TerrainPicker_default(vertices, indices, encoding);
}
TerrainMesh.prototype.getTransform = function(mode, projection) {
  if (this._lastPickSceneMode === mode) {
    return this._transform;
  }
  this._terrainPicker.needsRebuild = true;
  if (!defined_default(mode) || mode === SceneMode_default.SCENE3D) {
    return computeTransform(this, this._transform);
  }
  return computeTransform2D(this, projection, this._transform);
};
function computeTransform(mesh, result) {
  const exaggeration = mesh.encoding.exaggeration;
  const exaggerationRelativeHeight = mesh.encoding.exaggerationRelativeHeight;
  const exaggeratedMinHeight = VerticalExaggeration_default.getHeight(
    mesh.minimumHeight,
    exaggeration,
    exaggerationRelativeHeight
  );
  const exaggeratedMaxHeight = VerticalExaggeration_default.getHeight(
    mesh.maximumHeight,
    exaggeration,
    exaggerationRelativeHeight
  );
  const obb = OrientedBoundingBox_default.fromRectangle(
    mesh.rectangle,
    exaggeratedMinHeight,
    exaggeratedMaxHeight,
    Ellipsoid_default.default,
    mesh.orientedBoundingBox
  );
  return OrientedBoundingBox_default.computeTransformation(obb, result);
}
var scratchSWCartesian = new Cartesian3_default();
var scratchNECartesian = new Cartesian3_default();
var scratchSWCartographic = new Cartographic_default();
var scratchNECartographic = new Cartographic_default();
var scratchScale2D = new Cartesian3_default();
var scratchCenter2D = new Cartesian3_default();
function computeTransform2D(mesh, projection, result) {
  const exaggeration = mesh.encoding.exaggeration;
  const exaggerationRelativeHeight = mesh.encoding.exaggerationRelativeHeight;
  const exaggeratedMinHeight = VerticalExaggeration_default.getHeight(
    mesh.minimumHeight,
    exaggeration,
    exaggerationRelativeHeight
  );
  const exaggeratedMaxHeight = VerticalExaggeration_default.getHeight(
    mesh.maximumHeight,
    exaggeration,
    exaggerationRelativeHeight
  );
  const southwest = projection.project(
    Cartographic_default.fromRadians(
      mesh.rectangle.west,
      mesh.rectangle.south,
      0,
      scratchSWCartographic
    ),
    scratchSWCartesian
  );
  const northeast = projection.project(
    Cartographic_default.fromRadians(
      mesh.rectangle.east,
      mesh.rectangle.north,
      0,
      scratchNECartographic
    ),
    scratchNECartesian
  );
  const heightRange = exaggeratedMaxHeight - exaggeratedMinHeight;
  const scale = Cartesian3_default.fromElements(
    northeast.x - southwest.x,
    northeast.y - southwest.y,
    heightRange > 0 ? heightRange : 1,
    // Avoid zero scale
    scratchScale2D
  );
  const center = Cartesian3_default.fromElements(
    southwest.x + scale.x * 0.5,
    southwest.y + scale.y * 0.5,
    exaggeratedMinHeight + scale.z * 0.5,
    scratchCenter2D
  );
  Matrix4_default.fromTranslation(center, result);
  Matrix4_default.setScale(result, scale, result);
  Matrix4_default.multiply(Transforms_default.SWIZZLE_3D_TO_2D_MATRIX, result, result);
  return result;
}
TerrainMesh.prototype.pick = function(ray, cullBackFaces, mode, projection) {
  const intersection = this._terrainPicker.rayIntersect(
    ray,
    this.getTransform(mode, projection),
    cullBackFaces,
    mode,
    projection
  );
  this._lastPickSceneMode = mode;
  return intersection;
};
TerrainMesh.prototype.updateExaggeration = function(exaggeration, exaggerationRelativeHeight) {
  this._terrainPicker._vertices = this.vertices;
  this._terrainPicker.needsRebuild = true;
  this._lastPickSceneMode = void 0;
};
TerrainMesh.prototype.updateSceneMode = function(mode) {
  this._terrainPicker.needsRebuild = true;
  this._lastPickSceneMode = void 0;
};
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
var scratchCartographic2 = new Cartographic_default();
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
      scratchCartographic2
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
    rectangle,
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
    upsampleRectangle,
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
