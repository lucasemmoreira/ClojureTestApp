goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__49307,res){
var map__49308 = p__49307;
var map__49308__$1 = cljs.core.__destructure_map(map__49308);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49308__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49308__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__49309 = res;
var G__49309__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49309,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__49309);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49309__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__49309__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__49311 = arguments.length;
switch (G__49311) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__49312,msg,handlers,timeout_after_ms){
var map__49313 = p__49312;
var map__49313__$1 = cljs.core.__destructure_map(map__49313);
var runtime = map__49313__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49313__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___49577 = arguments.length;
var i__4865__auto___49578 = (0);
while(true){
if((i__4865__auto___49578 < len__4864__auto___49577)){
args__4870__auto__.push((arguments[i__4865__auto___49578]));

var G__49579 = (i__4865__auto___49578 + (1));
i__4865__auto___49578 = G__49579;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49323,ev,args){
var map__49324 = p__49323;
var map__49324__$1 = cljs.core.__destructure_map(map__49324);
var runtime = map__49324__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49324__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__49325 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49328 = null;
var count__49329 = (0);
var i__49330 = (0);
while(true){
if((i__49330 < count__49329)){
var ext = chunk__49328.cljs$core$IIndexed$_nth$arity$2(null,i__49330);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__49580 = seq__49325;
var G__49581 = chunk__49328;
var G__49582 = count__49329;
var G__49583 = (i__49330 + (1));
seq__49325 = G__49580;
chunk__49328 = G__49581;
count__49329 = G__49582;
i__49330 = G__49583;
continue;
} else {
var G__49584 = seq__49325;
var G__49585 = chunk__49328;
var G__49586 = count__49329;
var G__49587 = (i__49330 + (1));
seq__49325 = G__49584;
chunk__49328 = G__49585;
count__49329 = G__49586;
i__49330 = G__49587;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49325);
if(temp__5753__auto__){
var seq__49325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49325__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49325__$1);
var G__49590 = cljs.core.chunk_rest(seq__49325__$1);
var G__49591 = c__4679__auto__;
var G__49592 = cljs.core.count(c__4679__auto__);
var G__49593 = (0);
seq__49325 = G__49590;
chunk__49328 = G__49591;
count__49329 = G__49592;
i__49330 = G__49593;
continue;
} else {
var ext = cljs.core.first(seq__49325__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__49595 = cljs.core.next(seq__49325__$1);
var G__49596 = null;
var G__49597 = (0);
var G__49598 = (0);
seq__49325 = G__49595;
chunk__49328 = G__49596;
count__49329 = G__49597;
i__49330 = G__49598;
continue;
} else {
var G__49599 = cljs.core.next(seq__49325__$1);
var G__49600 = null;
var G__49601 = (0);
var G__49602 = (0);
seq__49325 = G__49599;
chunk__49328 = G__49600;
count__49329 = G__49601;
i__49330 = G__49602;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq49320){
var G__49321 = cljs.core.first(seq49320);
var seq49320__$1 = cljs.core.next(seq49320);
var G__49322 = cljs.core.first(seq49320__$1);
var seq49320__$2 = cljs.core.next(seq49320__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49321,G__49322,seq49320__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__49359,p__49360){
var map__49361 = p__49359;
var map__49361__$1 = cljs.core.__destructure_map(map__49361);
var runtime = map__49361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49362 = p__49360;
var map__49362__$1 = cljs.core.__destructure_map(map__49362);
var msg = map__49362__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49362__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__49379 = cljs.core.deref(state_ref);
var map__49379__$1 = cljs.core.__destructure_map(map__49379);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49379__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49379__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__49380){
var map__49381 = p__49380;
var map__49381__$1 = cljs.core.__destructure_map(map__49381);
var runtime = map__49381__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49381__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__49382,msg){
var map__49383 = p__49382;
var map__49383__$1 = cljs.core.__destructure_map(map__49383);
var runtime = map__49383__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49383__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__49384,key,p__49385){
var map__49386 = p__49384;
var map__49386__$1 = cljs.core.__destructure_map(map__49386);
var state = map__49386__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49386__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__49387 = p__49385;
var map__49387__$1 = cljs.core.__destructure_map(map__49387);
var spec = map__49387__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49387__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__49408,key,spec){
var map__49410 = p__49408;
var map__49410__$1 = cljs.core.__destructure_map(map__49410);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49410__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__49411_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__49411_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__49412_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__49412_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__49413_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__49413_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__49414_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__49414_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__49415_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__49415_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__49421,key){
var map__49422 = p__49421;
var map__49422__$1 = cljs.core.__destructure_map(map__49422);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49422__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__49428,msg){
var map__49429 = p__49428;
var map__49429__$1 = cljs.core.__destructure_map(map__49429);
var runtime = map__49429__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49429__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__49438,p__49439){
var map__49440 = p__49438;
var map__49440__$1 = cljs.core.__destructure_map(map__49440);
var runtime = map__49440__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49440__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49441 = p__49439;
var map__49441__$1 = cljs.core.__destructure_map(map__49441);
var msg = map__49441__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49441__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__49469 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49471 = null;
var count__49472 = (0);
var i__49473 = (0);
while(true){
if((i__49473 < count__49472)){
var map__49513 = chunk__49471.cljs$core$IIndexed$_nth$arity$2(null,i__49473);
var map__49513__$1 = cljs.core.__destructure_map(map__49513);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49513__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49629 = seq__49469;
var G__49630 = chunk__49471;
var G__49631 = count__49472;
var G__49632 = (i__49473 + (1));
seq__49469 = G__49629;
chunk__49471 = G__49630;
count__49472 = G__49631;
i__49473 = G__49632;
continue;
} else {
var G__49633 = seq__49469;
var G__49634 = chunk__49471;
var G__49635 = count__49472;
var G__49636 = (i__49473 + (1));
seq__49469 = G__49633;
chunk__49471 = G__49634;
count__49472 = G__49635;
i__49473 = G__49636;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49469);
if(temp__5753__auto__){
var seq__49469__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49469__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__49469__$1);
var G__49638 = cljs.core.chunk_rest(seq__49469__$1);
var G__49639 = c__4679__auto__;
var G__49640 = cljs.core.count(c__4679__auto__);
var G__49641 = (0);
seq__49469 = G__49638;
chunk__49471 = G__49639;
count__49472 = G__49640;
i__49473 = G__49641;
continue;
} else {
var map__49549 = cljs.core.first(seq__49469__$1);
var map__49549__$1 = cljs.core.__destructure_map(map__49549);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49549__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__49643 = cljs.core.next(seq__49469__$1);
var G__49644 = null;
var G__49645 = (0);
var G__49646 = (0);
seq__49469 = G__49643;
chunk__49471 = G__49644;
count__49472 = G__49645;
i__49473 = G__49646;
continue;
} else {
var G__49647 = cljs.core.next(seq__49469__$1);
var G__49648 = null;
var G__49649 = (0);
var G__49650 = (0);
seq__49469 = G__49647;
chunk__49471 = G__49648;
count__49472 = G__49649;
i__49473 = G__49650;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
