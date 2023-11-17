import{L as G,y as Y,A as M,B as H,r as J,u as ee,w as te,q as ae,t as i,C as re}from"./index-d3697828.js";import{E as ne,L as ie}from"./index-b7a5c312.js";import"./sanity-f7bad2b2.js";const se=36,T=1,oe=2,k=3,w=4,le=5,ce=6,de=7,me=8,ue=9,fe=10,pe=11,ge=12,he=13,_e=14,be=15,ye=16,ve=17,U=18,ke=19,D=20,Z=21,B=22,Oe=23,xe=24;function Q(t){return t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57}function we(t){return t>=48&&t<=57||t>=97&&t<=102||t>=65&&t<=70}function u(t,e,r){for(let a=!1;;){if(t.next<0)return;if(t.next==e&&!a){t.advance();return}a=r&&!a&&t.next==92,t.advance()}}function Qe(t){for(;;){if(t.next<0||t.peek(1)<0)return;if(t.next==36&&t.peek(1)==36){t.advance(2);return}t.advance()}}function I(t,e){for(;!(t.next!=95&&!Q(t.next));)e!=null&&(e+=String.fromCharCode(t.next)),t.advance();return e}function Se(t){if(t.next==39||t.next==34||t.next==96){let e=t.next;t.advance(),u(t,e,!1)}else I(t)}function z(t,e){for(;t.next==48||t.next==49;)t.advance();e&&t.next==e&&t.advance()}function L(t,e){for(;;){if(t.next==46){if(e)break;e=!0}else if(t.next<48||t.next>57)break;t.advance()}if(t.next==69||t.next==101)for(t.advance(),(t.next==43||t.next==45)&&t.advance();t.next>=48&&t.next<=57;)t.advance()}function X(t){for(;!(t.next<0||t.next==10);)t.advance()}function h(t,e){for(let r=0;r<e.length;r++)if(e.charCodeAt(r)==t)return!0;return!1}const R=` 	\r
`;function V(t,e,r){let a=Object.create(null);a.true=a.false=le,a.null=a.unknown=ce;for(let n of t.split(" "))n&&(a[n]=D);for(let n of e.split(" "))n&&(a[n]=Z);for(let n of(r||"").split(" "))n&&(a[n]=xe);return a}const f="array binary bit boolean char character clob date decimal double float int integer interval large national nchar nclob numeric object precision real smallint time timestamp varchar varying ",p="absolute action add after all allocate alter and any are as asc assertion at authorization before begin between both breadth by call cascade cascaded case cast catalog check close collate collation column commit condition connect connection constraint constraints constructor continue corresponding count create cross cube current current_date current_default_transform_group current_transform_group_for_type current_path current_role current_time current_timestamp current_user cursor cycle data day deallocate declare default deferrable deferred delete depth deref desc describe descriptor deterministic diagnostics disconnect distinct do domain drop dynamic each else elseif end end-exec equals escape except exception exec execute exists exit external fetch first for foreign found from free full function general get global go goto grant group grouping handle having hold hour identity if immediate in indicator initially inner inout input insert intersect into is isolation join key language last lateral leading leave left level like limit local localtime localtimestamp locator loop map match method minute modifies module month names natural nesting new next no none not of old on only open option or order ordinality out outer output overlaps pad parameter partial path prepare preserve primary prior privileges procedure public read reads recursive redo ref references referencing relative release repeat resignal restrict result return returns revoke right role rollback rollup routine row rows savepoint schema scroll search second section select session session_user set sets signal similar size some space specific specifictype sql sqlexception sqlstate sqlwarning start state static system_user table temporary then timezone_hour timezone_minute to trailing transaction translation treat trigger under undo union unique unnest until update usage user using value values view when whenever where while with without work write year zone ",S={backslashEscapes:!1,hashComments:!1,spaceAfterDashes:!1,slashComments:!1,doubleQuotedStrings:!1,doubleDollarQuotedStrings:!1,unquotedBitLiterals:!1,treatBitsAsBytes:!1,charSetCasts:!1,operatorChars:"*+-%<>!=&|~^/",specialVar:"?",identifierQuotes:'"',words:V(p,f)};function Ce(t,e,r,a){let n={};for(let o in S)n[o]=(t.hasOwnProperty(o)?t:S)[o];return e&&(n.words=V(e,r||"",a)),n}function N(t){return new ne(e=>{var r;let{next:a}=e;if(e.advance(),h(a,R)){for(;h(e.next,R);)e.advance();e.acceptToken(se)}else if(a==36&&e.next==36&&t.doubleDollarQuotedStrings)Qe(e),e.acceptToken(k);else if(a==39||a==34&&t.doubleQuotedStrings)u(e,a,t.backslashEscapes),e.acceptToken(k);else if(a==35&&t.hashComments||a==47&&e.next==47&&t.slashComments)X(e),e.acceptToken(T);else if(a==45&&e.next==45&&(!t.spaceAfterDashes||e.peek(1)==32))X(e),e.acceptToken(T);else if(a==47&&e.next==42){e.advance();for(let n=1;;){let o=e.next;if(e.next<0)break;if(e.advance(),o==42&&e.next==47){if(n--,e.advance(),!n)break}else o==47&&e.next==42&&(n++,e.advance())}e.acceptToken(oe)}else if((a==101||a==69)&&e.next==39)e.advance(),u(e,39,!0);else if((a==110||a==78)&&e.next==39&&t.charSetCasts)e.advance(),u(e,39,t.backslashEscapes),e.acceptToken(k);else if(a==95&&t.charSetCasts)for(let n=0;;n++){if(e.next==39&&n>1){e.advance(),u(e,39,t.backslashEscapes),e.acceptToken(k);break}if(!Q(e.next))break;e.advance()}else if(a==40)e.acceptToken(de);else if(a==41)e.acceptToken(me);else if(a==123)e.acceptToken(ue);else if(a==125)e.acceptToken(fe);else if(a==91)e.acceptToken(pe);else if(a==93)e.acceptToken(ge);else if(a==59)e.acceptToken(he);else if(t.unquotedBitLiterals&&a==48&&e.next==98)e.advance(),z(e),e.acceptToken(B);else if((a==98||a==66)&&(e.next==39||e.next==34)){const n=e.next;e.advance(),t.treatBitsAsBytes?(u(e,n,t.backslashEscapes),e.acceptToken(Oe)):(z(e,n),e.acceptToken(B))}else if(a==48&&(e.next==120||e.next==88)||(a==120||a==88)&&e.next==39){let n=e.next==39;for(e.advance();we(e.next);)e.advance();n&&e.next==39&&e.advance(),e.acceptToken(w)}else if(a==46&&e.next>=48&&e.next<=57)L(e,!0),e.acceptToken(w);else if(a==46)e.acceptToken(_e);else if(a>=48&&a<=57)L(e,!1),e.acceptToken(w);else if(h(a,t.operatorChars)){for(;h(e.next,t.operatorChars);)e.advance();e.acceptToken(be)}else if(h(a,t.specialVar))e.next==a&&e.advance(),Se(e),e.acceptToken(ve);else if(h(a,t.identifierQuotes))u(e,a,!1),e.acceptToken(ke);else if(a==58||a==44)e.acceptToken(ye);else if(Q(a)){let n=I(e,String.fromCharCode(a));e.acceptToken(e.next==46?U:(r=t.words[n.toLowerCase()])!==null&&r!==void 0?r:U)}})}const $=N(S),qe=ie.deserialize({version:14,states:"%vQ]QQOOO#wQRO'#DSO$OQQO'#CwO%eQQO'#CxO%lQQO'#CyO%sQQO'#CzOOQQ'#DS'#DSOOQQ'#C}'#C}O'UQRO'#C{OOQQ'#Cv'#CvOOQQ'#C|'#C|Q]QQOOQOQQOOO'`QQO'#DOO(xQRO,59cO)PQQO,59cO)UQQO'#DSOOQQ,59d,59dO)cQQO,59dOOQQ,59e,59eO)jQQO,59eOOQQ,59f,59fO)qQQO,59fOOQQ-E6{-E6{OOQQ,59b,59bOOQQ-E6z-E6zOOQQ,59j,59jOOQQ-E6|-E6|O+VQRO1G.}O+^QQO,59cOOQQ1G/O1G/OOOQQ1G/P1G/POOQQ1G/Q1G/QP+kQQO'#C}O+rQQO1G.}O)PQQO,59cO,PQQO'#Cw",stateData:",[~OtOSPOSQOS~ORUOSUOTUOUUOVROXSOZTO]XO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O^]ORvXSvXTvXUvXVvXXvXZvX]vX_vX`vXavXbvXcvXdvXevXfvXgvXhvX~OsvX~P!jOa_Ob_Oc_O~ORUOSUOTUOUUOVROXSOZTO^tO_UO`UOa`Ob`Oc`OdUOeUOfUOgUOhUO~OWaO~P$ZOYcO~P$ZO[eO~P$ZORUOSUOTUOUUOVROXSOZTO^QO_UO`UOaPObPOcPOdUOeUOfUOgUOhUO~O]hOsoX~P%zOajObjOcjO~O^]ORkaSkaTkaUkaVkaXkaZka]ka_ka`kaakabkackadkaekafkagkahka~Oska~P'kO^]O~OWvXYvX[vX~P!jOWnO~P$ZOYoO~P$ZO[pO~P$ZO^]ORkiSkiTkiUkiVkiXkiZki]ki_ki`kiakibkickidkiekifkigkihki~Oski~P)xOWkaYka[ka~P'kO]hO~P$ZOWkiYki[ki~P)xOasObsOcsO~O",goto:"#hwPPPPPPPPPPPPPPPPPPPPPPPPPPx||||!Y!^!d!xPPP#[TYOZeUORSTWZbdfqT[OZQZORiZSWOZQbRQdSQfTZgWbdfqQ^PWk^lmrQl_Qm`RrseVORSTWZbdfq",nodeNames:"⚠ LineComment BlockComment String Number Bool Null ( ) { } [ ] ; . Operator Punctuation SpecialVar Identifier QuotedIdentifier Keyword Type Bits Bytes Builtin Script Statement CompositeIdentifier Parens Braces Brackets Statement",maxTerm:38,skippedNodes:[0,1,2],repeatNodeCount:3,tokenData:"RORO",tokenizers:[0,$],topRules:{Script:[0,25]},tokenPrec:0});function C(t){let e=t.cursor().moveTo(t.from,-1);for(;/Comment/.test(e.name);)e.moveTo(e.from,-1);return e.node}function b(t,e){let r=t.sliceString(e.from,e.to),a=/^([`'"])(.*)\1$/.exec(r);return a?a[2]:r}function O(t){return t&&(t.name=="Identifier"||t.name=="QuotedIdentifier")}function Pe(t,e){if(e.name=="CompositeIdentifier"){let r=[];for(let a=e.firstChild;a;a=a.nextSibling)O(a)&&r.push(b(t,a));return r}return[b(t,e)]}function j(t,e){for(let r=[];;){if(!e||e.name!=".")return r;let a=C(e);if(!O(a))return r;r.unshift(b(t,a)),e=C(a)}}function Te(t,e){let r=re(t).resolveInner(e,-1),a=Be(t.doc,r);return r.name=="Identifier"||r.name=="QuotedIdentifier"||r.name=="Keyword"?{from:r.from,quoted:r.name=="QuotedIdentifier"?t.doc.sliceString(r.from,r.from+1):null,parents:j(t.doc,C(r)),aliases:a}:r.name=="."?{from:e,quoted:null,parents:j(t.doc,r),aliases:a}:{from:e,quoted:null,parents:[],empty:!0,aliases:a}}const Ue=new Set("where group having order union intersect except all distinct limit offset fetch for".split(" "));function Be(t,e){let r;for(let n=e;!r;n=n.parent){if(!n)return null;n.name=="Statement"&&(r=n)}let a=null;for(let n=r.firstChild,o=!1,c=null;n;n=n.nextSibling){let s=n.name=="Keyword"?t.sliceString(n.from,n.to).toLowerCase():null,l=null;if(!o)o=s=="from";else if(s=="as"&&c&&O(n.nextSibling))l=b(t,n.nextSibling);else{if(s&&Ue.has(s))break;c&&O(n)&&(l=b(t,n))}l&&(a||(a=Object.create(null)),a[l]=Pe(t,c)),c=/Identifier$/.test(n.name)?n:null}return a}function ze(t,e){return t?e.map(r=>Object.assign(Object.assign({},r),{label:t+r.label+t,apply:void 0})):e}const Le=/^\w*$/,Xe=/^[`'"]?\w*[`'"]?$/;class q{constructor(){this.list=[],this.children=void 0}child(e){let r=this.children||(this.children=Object.create(null));return r[e]||(r[e]=new q)}childCompletions(e){return this.children?Object.keys(this.children).filter(r=>r).map(r=>({label:r,type:e})):[]}}function Re(t,e,r,a,n){let o=new q,c=o.child(n||"");for(let s in t){let l=s.indexOf("."),g=(l>-1?o.child(s.slice(0,l)):c).child(l>-1?s.slice(l+1):s);g.list=t[s].map(_=>typeof _=="string"?{label:_,type:"property"}:_)}c.list=(e||c.childCompletions("type")).concat(a?c.child(a).list:[]);for(let s in o.children){let l=o.child(s);l.list.length||(l.list=l.childCompletions("type"))}return o.list=c.list.concat(r||o.childCompletions("type")),s=>{let{parents:l,from:P,quoted:g,empty:_,aliases:y}=Te(s.state,s.pos);if(_&&!s.explicit)return null;y&&l.length==1&&(l=y[l[0]]||l);let d=o;for(let v of l){for(;!d.children||!d.children[v];)if(d==o)d=c;else if(d==c&&a)d=d.child(a);else return null;d=d.child(v)}let F=g&&s.state.sliceDoc(s.pos,s.pos+1)==g,x=d.list;return d==o&&y&&(x=x.concat(Object.keys(y).map(v=>({label:v,type:"constant"})))),{from:P,to:F?s.pos+1:void 0,options:ze(g,x),validFor:g?Xe:Le}}}function je(t,e){let r=Object.keys(t).map(a=>({label:e?a.toUpperCase():a,type:t[a]==Z?"type":t[a]==D?"keyword":"variable",boost:-1}));return M(["QuotedIdentifier","SpecialVar","String","LineComment","BlockComment","."],H(r))}let De=qe.configure({props:[J.add({Statement:ee()}),te.add({Statement(t){return{from:t.firstChild.to,to:t.to}},BlockComment(t){return{from:t.from+2,to:t.to-2}}}),ae({Keyword:i.keyword,Type:i.typeName,Builtin:i.standard(i.name),Bits:i.number,Bytes:i.string,Bool:i.bool,Null:i.null,Number:i.number,String:i.string,Identifier:i.name,QuotedIdentifier:i.special(i.string),SpecialVar:i.special(i.name),LineComment:i.lineComment,BlockComment:i.blockComment,Operator:i.operator,"Semi Punctuation":i.punctuation,"( )":i.paren,"{ }":i.brace,"[ ]":i.squareBracket})]});class m{constructor(e,r){this.dialect=e,this.language=r}get extension(){return this.language.extension}static define(e){let r=Ce(e,e.keywords,e.types,e.builtin),a=G.define({name:"sql",parser:De.configure({tokenizers:[{from:$,to:N(r)}]}),languageData:{commentTokens:{line:"--",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}});return new m(r,a)}}function Ze(t,e=!1){return je(t.dialect.words,e)}function Ie(t,e=!1){return t.language.data.of({autocomplete:Ze(t,e)})}function Ve(t){return t.schema?Re(t.schema,t.tables,t.schemas,t.defaultTable,t.defaultSchema):()=>null}function Ne(t){return t.schema?(t.dialect||E).language.data.of({autocomplete:Ve(t)}):[]}function Ae(t={}){let e=t.dialect||E;return new Y(e.language,[Ne(t),Ie(e,!!t.upperCaseKeywords)])}const E=m.define({}),Ke=m.define({charSetCasts:!0,doubleDollarQuotedStrings:!0,operatorChars:"+-*/<>=~!@#%^&|`?",specialVar:"",keywords:p+"a abort abs absent access according ada admin aggregate alias also always analyse analyze array_agg array_max_cardinality asensitive assert assignment asymmetric atomic attach attribute attributes avg backward base64 begin_frame begin_partition bernoulli bit_length blocked bom c cache called cardinality catalog_name ceil ceiling chain char_length character_length character_set_catalog character_set_name character_set_schema characteristics characters checkpoint class class_origin cluster coalesce cobol collation_catalog collation_name collation_schema collect column_name columns command_function command_function_code comment comments committed concurrently condition_number configuration conflict connection_name constant constraint_catalog constraint_name constraint_schema contains content control conversion convert copy corr cost covar_pop covar_samp csv cume_dist current_catalog current_row current_schema cursor_name database datalink datatype datetime_interval_code datetime_interval_precision db debug defaults defined definer degree delimiter delimiters dense_rank depends derived detach detail dictionary disable discard dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue document dump dynamic_function dynamic_function_code element elsif empty enable encoding encrypted end_frame end_partition endexec enforced enum errcode error event every exclude excluding exclusive exp explain expression extension extract family file filter final first_value flag floor following force foreach fortran forward frame_row freeze fs functions fusion g generated granted greatest groups handler header hex hierarchy hint id ignore ilike immediately immutable implementation implicit import include including increment indent index indexes info inherit inherits inline insensitive instance instantiable instead integrity intersection invoker isnull k key_member key_type label lag last_value lead leakproof least length library like_regex link listen ln load location lock locked log logged lower m mapping matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text min minvalue mod mode more move multiset mumps name namespace nfc nfd nfkc nfkd nil normalize normalized nothing notice notify notnull nowait nth_value ntile nullable nullif nulls number occurrences_regex octet_length octets off offset oids operator options ordering others over overlay overriding owned owner p parallel parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partition pascal passing passthrough password percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding prepared print_strict_params procedural procedures program publication query quote raise range rank reassign recheck recovery refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex rename repeatable replace replica requiring reset respect restart restore result_oid returned_cardinality returned_length returned_octet_length returned_sqlstate returning reverse routine_catalog routine_name routine_schema routines row_count row_number rowtype rule scale schema_name schemas scope scope_catalog scope_name scope_schema security selective self sensitive sequence sequences serializable server server_name setof share show simple skip slice snapshot source specific_name sqlcode sqlerror sqrt stable stacked standalone statement statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time t table_name tables tablesample tablespace temp template ties token top_level_count transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex trigger_catalog trigger_name trigger_schema trim trim_array truncate trusted type types uescape unbounded uncommitted unencrypted unlink unlisten unlogged unnamed untyped upper uri use_column use_variable user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema vacuum valid validate validator value_of var_pop var_samp varbinary variable_conflict variadic verbose version versioning views volatile warning whitespace width_bucket window within wrapper xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate yes",types:f+"bigint int8 bigserial serial8 varbit bool box bytea cidr circle precision float8 inet int4 json jsonb line lseg macaddr macaddr8 money numeric pg_lsn point polygon float4 int2 smallserial serial2 serial serial4 text timetz timestamptz tsquery tsvector txid_snapshot uuid xml"}),W="accessible algorithm analyze asensitive authors auto_increment autocommit avg avg_row_length binlog btree cache catalog_name chain change changed checkpoint checksum class_origin client_statistics coalesce code collations columns comment committed completion concurrent consistent contains contributors convert database databases day_hour day_microsecond day_minute day_second delay_key_write delayed delimiter des_key_file dev_pop dev_samp deviance directory disable discard distinctrow div dual dumpfile enable enclosed ends engine engines enum errors escaped even event events every explain extended fast field fields flush force found_rows fulltext grants handler hash high_priority hosts hour_microsecond hour_minute hour_second ignore ignore_server_ids import index index_statistics infile innodb insensitive insert_method install invoker iterate keys kill linear lines list load lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modify mutex mysql_errno no_write_to_binlog offline offset one online optimize optionally outfile pack_keys parser partition partitions password phase plugin plugins prev processlist profile profiles purge query quick range read_write rebuild recover regexp relaylog remove rename reorganize repair repeatable replace require resume rlike row_format rtree schedule schema_name schemas second_microsecond security sensitive separator serializable server share show slave slow snapshot soname spatial sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result ssl starting starts std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace terminated triggers truncate uncommitted uninstall unlock upgrade use use_frm user_resources user_statistics utc_date utc_time utc_timestamp variables views warnings xa xor year_month zerofill",A=f+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int1 int2 int3 int4 int8 float4 float8 varbinary varcharacter precision datetime unsigned signed",K="charset clear edit ego help nopager notee nowarning pager print prompt quit rehash source status system tee",Fe=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:p+"group_concat "+W,types:A,builtin:K}),Ge=m.define({operatorChars:"*+-%<>!=&|^",charSetCasts:!0,doubleQuotedStrings:!0,unquotedBitLiterals:!0,hashComments:!0,spaceAfterDashes:!0,specialVar:"@?",identifierQuotes:"`",keywords:p+"always generated groupby_concat hard persistent shutdown soft virtual "+W,types:A,builtin:K}),Ye=m.define({keywords:p+"trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock pivot readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx unpivot updlock with",types:f+"bigint smallint smallmoney tinyint money real text nvarchar ntext varbinary image hierarchyid uniqueidentifier sql_variant xml",builtin:"binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id",operatorChars:"*+-%<>!=^&|/",specialVar:"@"}),Me=m.define({keywords:p+"abort analyze attach autoincrement conflict database detach exclusive fail glob ignore index indexed instead isnull notnull offset plan pragma query raise regexp reindex rename replace temp vacuum virtual",types:f+"bool blob long longblob longtext medium mediumblob mediumint mediumtext tinyblob tinyint tinytext text bigint int2 int8 unsigned signed real",builtin:"auth backup bail changes clone databases dbinfo dump echo eqp explain fullschema headers help import imposter indexes iotrace lint load log mode nullvalue once print prompt quit restore save scanstats separator shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width",operatorChars:"*+-%<>!=&|/~",identifierQuotes:'`"',specialVar:"@:?$"}),He=m.define({keywords:"add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime infinity NaN",types:f+"ascii bigint blob counter frozen inet list map static text timeuuid tuple uuid varint",slashComments:!0}),Je=m.define({keywords:p+"abort accept access add all alter and any arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body by case cast char_base check close cluster clusters colauth column comment commit compress connected constant constraint crash create current currval cursor data_base database dba deallocate debugoff debugon declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry exception exception_init exchange exclusive exists external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base of off offline on online only option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw rebuild record ref references refresh rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work",builtin:"appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define echo editfile embedded feedback flagger flush heading headsep instance linesize lno loboffset logsource longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar repfooter repheader serveroutput shiftinout show showmode spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout timing trimout trimspool ttitle underline verify version wrap",types:f+"ascii bfile bfilename bigserial bit blob dec long number nvarchar nvarchar2 serial smallint string text uid varchar2 xml",operatorChars:"*/+-%<>!=~",doubleQuotedStrings:!0,charSetCasts:!0});export{He as Cassandra,Ye as MSSQL,Ge as MariaSQL,Fe as MySQL,Je as PLSQL,Ke as PostgreSQL,m as SQLDialect,Me as SQLite,E as StandardSQL,Ie as keywordCompletion,Ze as keywordCompletionSource,Ne as schemaCompletion,Ve as schemaCompletionSource,Ae as sql};
